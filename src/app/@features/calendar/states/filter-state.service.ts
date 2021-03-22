// implements the state service to maintain the filter's state
// using the StateService base classs
import { Injectable } from '@angular/core';
import { StateService } from '@core/classes/state.service';
import { CalendarsService } from '@core/services/calendars.service';
import { ConfigService } from '@core/services/config.service';
import { SelectItem } from '@models/select-item.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalendarFilter } from '../models/calendar-filter.models';
import * as dayjs from 'dayjs';

const initialState: CalendarFilter = {
  startDate: new Date(dayjs().valueOf()),
  endDate: new Date(dayjs().add(1, 'month').valueOf()),
  categoryID: -1,
  tagID: -1
}

@Injectable()
export class FilterStateService  extends StateService<CalendarFilter> {

  // selects
  public filter$: Observable<CalendarFilter> = this.select(state => state);

  // helpers for the select boxs
  public categories$ = this.calendarService.getAllTaxonomies(
    this.configService.calendarID,
    'taxonomy_category'
  ).pipe (
    map(response => response.data.items.map(
      item => {
        return {
          id: item.id,
          title: item.title
        } as SelectItem
      }
    ))
  );

  public tags$ = this.calendarService.getAllTaxonomies(
    this.configService.calendarID,
    'taxonomy_tag'
  ).pipe (
    map(response => response.data.items.map(
      item => {
        return {
          id: item.id,
          title: item.title
        } as SelectItem
      }
    ))
  );

  constructor(
    private calendarService: CalendarsService,
    private configService: ConfigService
  ) {
    super(initialState);
    dayjs.locale('en-ca');
  }

  updateState(calendarFilter: Partial<CalendarFilter>): void {
    this.setState(calendarFilter);
  }

}
