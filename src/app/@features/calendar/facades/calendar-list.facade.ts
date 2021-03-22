import { Injectable } from '@angular/core';
import { ConfigService } from '@core/services/config.service';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EventItem } from '@models/event.models';
import { CalendarRequestParams, CalendarsService } from '@core/services/calendars.service';
import { CalendarFilter } from '@features/calendar/models/calendar-filter.models';
import * as dayjs from 'dayjs';
import 'dayjs/locale/en-ca';
import { FilterStateService } from '../states/filter-state.service';

@Injectable()
export class CalendarListfacade {

  // local state form CalendarListComponent
  private eventItems: EventItem[] = [];
  private loadNextPage = new BehaviorSubject<number>(1);
  private loadNextPage$ = this.loadNextPage.asObservable();

  // main stream!!!
  public calendar$ = combineLatest([ // return the last value of every stream when one of then change
    of(this.configService.title),
    this.loadNextPage$ // first time work automatically because we have a BehaviorSubject that emits 1 automatically
                       // and works every time that the filters change
    .pipe(
      switchMap( page => // when loadNextPage$ emits then we call to the calendar http services
        this.calendarService.getEvents(this.configService.calendarID, this.createCalendarRequestParams(page, this.calendarFilter))
      )
    )
  ]).pipe(
    map( ([title, eventItems]) => { // here we have the 2 values: the calendar title & what the http service returned
      this.eventItems = [ ...this.eventItems, ...eventItems.data.items ]; // add a new page of event to the result
      return {
        title,
        eventItems: this.eventItems,
        hasNext: eventItems.data.has_next
      };
    })
  );

  public calendarFilter: CalendarFilter = {
    startDate: new Date(),
    endDate: new Date(),
    categoryID: -1,
    tagID: -1
  };

  constructor(
    private calendarService: CalendarsService,
    private configService: ConfigService,
    private filterStateService: FilterStateService
  ) {
    dayjs.locale('en-ca');

    this.filterStateService.filter$
    .subscribe(calendarFilter => {
      this.filterChange(calendarFilter);
    });
  }

  public LoadMoreEvents() {
    // we take the value of the BehaviorSubject, add 1 and emit the new value
    // this trigger the switchMap again getting the new page
    // and then add it to eventItems array
    this.loadNextPage.next( this.loadNextPage.value + 1);
  }

  public filterChange(newFilter: CalendarFilter) {
    this.calendarFilter = newFilter;

    // reset itemlist and load firstPage to apply the new filters
    this.eventItems = [];
    this.loadNextPage.next( 1);
  }

  private createCalendarRequestParams(page: number, calendarFilter: CalendarFilter): Partial<CalendarRequestParams> {
    const params: Partial<CalendarRequestParams> = {};

    params.page = page;
    if (calendarFilter.startDate) {
      params.startDate = dayjs(calendarFilter.startDate).format('YYYY-MM-DD');
    }

    if (calendarFilter.endDate) {
      params.endDate = dayjs(calendarFilter.endDate).format('YYYY-MM-DD');;
    }

    if (calendarFilter.categoryID && calendarFilter.categoryID !== -1) {
      params.categoryID = calendarFilter.categoryID;
    }

    if (calendarFilter.tagID && calendarFilter.tagID !== -1) {
      params.categoryID = calendarFilter.tagID;
    }

    return params;
  }
}
