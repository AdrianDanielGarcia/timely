import { Component, Input, OnInit } from '@angular/core';
import { EventItem } from '@models/event.models';
import { stringToHslColor } from '@utils/ui/color-generator';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent implements OnInit {

  @Input() eventItem: EventItem | null = null;

  imageStyle : any = null;
  startDayOfWeek: string = '';
  startMonthName: string = '';
  startDay: string = '';
  endDayOfWeek: string = '';
  endMonthName: string = '';
  endDay: string = '';
  dateAndTimes = {
    startDateTime: '',
    endDateTime: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.imageStyle = this.getImageStyle(this.eventItem);

    // format dates
    const startDate = dayjs(this.eventItem?.start_datetime, 'YYYY-MM-DD HH:mm:ss');
    this.startDay = startDate.format('DD');
    this.startDayOfWeek = startDate.format('ddd');
    this.startMonthName = startDate.format('MMM');

    const endDate = dayjs(this.eventItem?.end_datetime, 'YYYY-MM-DD HH:mm:ss');
    this.endDay = endDate.format('DD');
    this.endDayOfWeek = endDate.format('ddd');
    this.endMonthName = endDate.format('MMM');

    this.dateAndTimes = this.formatDateAndTimes(startDate, endDate);
  }

  private formatDateAndTimes(startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) {

    const startTime = startDate.format('HH:mm'); //TODO: use the local format options
    const endTime = endDate.format('HH:mm'); //TODO: use the local format options
    const startD = startDate.format('ddd DD MMM');
    const endD = endDate.format('ddd DD MMM');

    if (startD === endD ) {
      return {
        startDateTime: `${startTime}hs`,
        endDateTime:  `${endTime}hs`
      }
    } else {
      return {
        startDateTime: `${startD} @${startTime}hs`,
        endDateTime:  `${endD} @${endTime}hs`
      }
    }
  }

  // TODO: analize refactor, perhaps move this function to @shared/ui
  // TODO: test with differents image size

  // create differents style if we have or no an image,
  // and if the image has differents aspect ratios
  public getImageStyle(eventItem: EventItem | null): any {
    let imageStyle = null;
    if (eventItem?.images) {
      const imageMedium = eventItem?.images[0].medium;
      imageStyle = { "background-image": `url(${imageMedium.url})` };

      if (imageMedium.width / imageMedium.height < 1.3 ) {
        imageStyle = { ...imageStyle, "background-size": 'cover'};
      } else {
        imageStyle = { ...imageStyle, "background-size": 'contain'};
      }
    } else {
      const backgroundColor = stringToHslColor(String(eventItem?.title));
      imageStyle = { 'background-color': backgroundColor};
    }

    return imageStyle;
  }

}
