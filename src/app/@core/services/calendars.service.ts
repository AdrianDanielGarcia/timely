import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { ConfigResponse } from '@models/config.models';
import { EventsResponse } from '@models/event.models';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { buildHttpQueryParams } from'@utils/http';
import { TaxonomyResponse } from '@models/taxonomy.models';
import { mergeMap, map } from 'rxjs/operators';

export interface CalendarRequestParams {
  startDate: string;
  endDate: string;
  page: number;
  perPage: number;
  categoryID: number;
  tagID: number;
}

export interface TaxonomyRequestParams {
  type: string;
  page: number;
  perPage: number;
}

const MAP_CALENDAR_PARAM_KEYS = {
  startDate: 'start_date',
  endDate: 'end_date',
  page: 'page',
  perPage: 'per_page',
  categoryID: 'categories',
  tagID: 'tags'
}

const MAP_TAXONOMY_PARAM_KEYS = {
  type: 'type',
  page: 'page',
  perPage: 'per_page',
}

@Injectable({
  providedIn: CoreModule
})
export class CalendarsService {

  private baseUrl = environment.TIMELY_BASE_URL;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getInfo(urlParam: string): Observable<ConfigResponse> {
    return this.httpClient.post<ConfigResponse>(
      this.url('info'),
      { url: urlParam }
    )
  }

  public getEvents(
    calendarID: number,
    requestParams: Partial<CalendarRequestParams> | null = null
  ): Observable<EventsResponse> {

    const params = buildHttpQueryParams(requestParams, MAP_CALENDAR_PARAM_KEYS);
    const finalUrl = `${this.url(String(calendarID))}${'/events'}`;
    return this.httpClient.get<EventsResponse>(finalUrl, {params})
  }

  public getTaxonomies(
    calendarID: number,
    requestParams: Partial<TaxonomyRequestParams> | null = null
  ): Observable<TaxonomyResponse> {

    const params = buildHttpQueryParams(requestParams, MAP_TAXONOMY_PARAM_KEYS);
    const finalUrl = `${this.url(String(calendarID))}${'/taxonomies'}`;
    return this.httpClient.get<TaxonomyResponse>(finalUrl, { params });
  }

  public getAllTaxonomies(
    calendarID: number,
    type: 'taxonomy_category' | 'taxonomy_tag'
  ): Observable<TaxonomyResponse> {

    return this.getTaxonomies(calendarID, {type})
    .pipe(
      mergeMap( firstPage => this.geRestTaxonomiesPages(calendarID, type, firstPage))
    );
  }

  private geRestTaxonomiesPages(
    calendarID: number,
    type: 'taxonomy_category' | 'taxonomy_tag',
    firstPage: TaxonomyResponse
  ) {

    const params: Partial<TaxonomyRequestParams> = {
      type,
      page: 1,
      perPage: firstPage.data.total
    }
    return this.getTaxonomies(calendarID, params);
  }

  private url(path: string): string {
    return `${this.baseUrl}calendars/${path}`;
  }
}
