import { Injectable } from '@angular/core';
import { ConfigResponse } from '@models/config.models';
import { CalendarsService } from './calendars.service';
import { environment } from 'environments/environment';
import { CoreModule } from '../core.module';

// TODO: analize the reactive solution to this code
// this let us react to changes in the configuration
@Injectable({
  providedIn: CoreModule
})
export class ConfigService {

  private _config: ConfigResponse | null = null;

  public get config() {
    return this._config;
  }

  public get dateFormat() {
    return this.config?.data.date; // TODO: change names of Date interface to DateFormat
  }

  public get dateTimeFormats() {
    return this.config?.data.date_time_formats;
  }

  public get timeFormat() {
    return this.config?.data.time;
  }

  public get title() {
    return this.config?.data.title;
  }

  public get calendarID() {
    return Number(this.config?.data.id);
  }

  constructor(
    private calendarService: CalendarsService
  ) {}

  public load() :Promise<ConfigResponse>  {

      const promise = this.calendarService.getInfo(environment.URL_CONFIG_PARAM)
        .toPromise()
        .then(data => {
          this._config = data;
          return data;
        });

      return promise;
  }
}
