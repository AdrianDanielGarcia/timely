import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/en-ca';
import { SelectItem } from '@models/select-item.models';
import { CalendarFilter } from '@features/calendar/models/calendar-filter.models';
import { DateAdapter } from '@angular/material/core';
import { TimeBlockData, TimeBlockService } from '@core/services/time-block.service';
import { FilterStateService } from '@features/calendar/states/filter-state.service';

@Component({
  selector: 'app-calendar-filter',
  templateUrl: './calendar-filter.component.html',
  styleUrls: ['./calendar-filter.component.scss']
})
export class CalendarFilterComponent implements OnInit, OnDestroy {
  public categories$ = this.filterStateService.categories$;
  public tags$ = this.filterStateService.tags$;

  // our filter form
  public filterForm = new FormGroup({
    categoryID: new FormControl(null),
    tagID: new FormControl(null),
    startDate: new FormControl({ value: null, disabled: true}),
    endDate: new FormControl({ value: null, disabled: true}),
  });

  public selectedTimeBlock: number = -1;

  private unsubscribeSignal: Subject<void> = new Subject<void>();

  constructor(
    private dateAdapter: DateAdapter<Dayjs>,
    private timeBlockService: TimeBlockService,
    private filterStateService: FilterStateService
  ) {
    // init locale that let the angular material date range picker
    // show the correct format
    dayjs.locale('en-ca');
    this.dateAdapter.setLocale('en-ca');
  }

  public timeBlocks = this.timeBlockService.getTimeBlocksArray();

  ngOnInit(): void {
    // initialize form with filter state
    const filterState = this.filterStateService.getStateSnapshot();
    this.filterForm.patchValue(filterState, { emitEvent: false})

    this.updateSeletedTimeBlock(filterState.startDate, filterState.endDate);

    this.waitFornChanges();
  }

  private updateSeletedTimeBlock(startDate: Date, endDate: Date) {
    const timeBlock = this.timeBlockService.getFromDates(startDate, endDate);
    this.selectedTimeBlock = timeBlock
      ? timeBlock.id
      : -1;
  }

  private waitFornChanges(): void {
    this.filterForm.valueChanges
    .pipe(
      takeUntil(this.unsubscribeSignal), // cleanup the subscription when component get destroyed
      map( value => this.filterForm.getRawValue()), // use getRawValues to get the disabled controls
      distinctUntilChanged( (a, b) => JSON.stringify(a) === JSON.stringify(b)) // just in case
    )
    .subscribe(values => {

      // the angular material datetimerange picker emit a different object than an standard JS Date
      // and we have a mix of type here, so
      // we need to select the apropiate date
      values.startDate = values?.startDate?.$d
        ? new Date((values.startDate.$d as Date).toISOString().substring(0,10))
        : values.startDate;
      values.endDate = values?.endDate?.$d
      ? new Date((values.endDate.$d as Date).toISOString().substring(0,10))
      : values.endDate;

      //TODO: test differents local times and timezones
      //TODO: I don´t believe that this code always works perfect
      // in all the cases.

      // if range picker only select one value
      // then emit a new value
      if (values.startDate && values.endDate) {
        this.updateSeletedTimeBlock(values.startDate , values.endDate);
        this.emitFilterChange(values);
      }
    });
  }

  private emitFilterChange(formValue: any): void {
    const newFilters = {
      startDate: formValue.startDate,
      endDate: formValue.endDate,
      categoryID: formValue.categoryID,
      tagID: formValue.tagID
    } as CalendarFilter
    this.filterStateService.updateState(newFilters);
  }

  public selectTimeBlock(timeBlock: TimeBlockData): void {
    this.selectedTimeBlock = timeBlock.id;

    this.filterForm.patchValue({startDate: timeBlock.startDate}, {emitEvent: false});

    this.filterForm.patchValue({
      endDate: timeBlock.endDate
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeSignal.next();
    this.unsubscribeSignal.complete();
  }


}
