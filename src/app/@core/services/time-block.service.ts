// initialize the service with the date range of differents
// time blocks
// TODO: add refresh or timer refresh functionality to let the ranges refresh in case
// of change of the day during the app up time

import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import * as dayjs from 'dayjs';
import 'dayjs/locale/en-ca';

export enum TimeBlockType {
  ThisWeek = 1,
  ThisWeekend,
  NextWeek,
  NextWeekend,
  ThisMonth,
  NextMonth,
}

export interface TimeBlockData {
  id: number;
  startDate: Date;
  endDate: Date;
  title: string;
}

@Injectable({
  providedIn: CoreModule,
})
export class TimeBlockService {
  private timeBlocksMap = new Map<TimeBlockType, TimeBlockData>();

  constructor() {
    // TODO: initialize locale globaly in the app
    dayjs.locale('en-ca');
    this.timeBlocksMap = this.InitializeTimeBlocksMap();
  }

  // TODO: this function needs an exhaustive unit test
  // TODO: test different locales
  private InitializeTimeBlocksMap() {
    const timeBlockMap = new Map<TimeBlockType, TimeBlockData>();

    for (const timeBlock in TimeBlockType) {
      switch (timeBlock) {
        case 'ThisWeek': {
          const startDate = new Date(dayjs().startOf('week').valueOf());
          const endDate = new Date(dayjs()
            .startOf('week')
            .add(6, 'day')
            .valueOf());
          timeBlockMap.set(TimeBlockType.ThisWeek, {
            startDate,
            endDate,
            title: 'This Week',
            id: 1,
          });
          break;
        }
        case 'ThisWeekend': {
          const startDate = new Date(dayjs()
            .startOf('week')
            .add(6, 'day')
            .valueOf());
          const endDate = new Date(dayjs()
            .endOf('week')
            .valueOf());
          timeBlockMap.set(TimeBlockType.ThisWeekend, {
            startDate,
            endDate,
            title: 'This Weekend',
            id: 2
          });
          break;
        }
        case 'NextWeek': {
          const startDate = new Date(dayjs()
            .startOf('week')
            .add(1, 'week')
            .valueOf());
          const endDate = new Date(dayjs()
            .startOf('week')
            .add(13, 'day')
            .valueOf());
          timeBlockMap.set(TimeBlockType.NextWeek, {
            startDate,
            endDate,
            title: 'Next Week',
            id: 3
          });
          break;
        }
        case 'NextWeekend': {
          const startDate = new Date(dayjs()
            .startOf('week')
            .add(1, 'week')
            .add(6, 'day')
            .valueOf());
          const endDate = new Date(dayjs()
            .endOf('week')
            .add(7, 'day')
            .valueOf());
          timeBlockMap.set(TimeBlockType.NextWeekend, {
            startDate,
            endDate,
            title: 'Next Weekend',
            id: 4
          });
          break;
        }
        case 'ThisMonth': {
          const startDate = new Date(dayjs()
            .startOf('month')
            .valueOf());
          const endDate = new Date(dayjs()
            .endOf('month')
            .subtract(1, 'day')
            .valueOf());
          timeBlockMap.set(TimeBlockType.ThisMonth, {
            startDate,
            endDate,
            title: 'This Month',
            id: 5
          });
          break;
        }
        case 'NextMonth': {
          const startDate = new Date(dayjs()
            .startOf('month')
            .add(1, 'month')
            .valueOf());
          const endDate = new Date(dayjs()
            .startOf('month')
            .add(2, 'month')
            .subtract(1, 'day')
            .valueOf());
          timeBlockMap.set(TimeBlockType.NextMonth, {
            startDate,
            endDate,
            title: 'Next Month',
            id: 6
          });
          break;
        }
      }
    }

    return timeBlockMap;
  }

  public getFromDates(startDate: Date, endDate: Date) {
    for (const timeBlockEntry of this.timeBlocksMap.entries()) {
      const id = timeBlockEntry[0];
      const data = timeBlockEntry[1];

      if (data.startDate === startDate && data.endDate === endDate) {
        return data;
      }
    }

    return null;
  }

  public getTimeBlocks() {
    return this.timeBlocksMap;
  }

  public getTimeBlocksArray() {
    const array: TimeBlockData[] = [];
    for (const timeBlockEntry of this.timeBlocksMap.entries()) {
      array.push(timeBlockEntry[1]);
    }
    return array;
  }
}
