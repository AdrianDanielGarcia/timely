import { Component, OnInit } from '@angular/core';
import { EventItem } from '@models/event.models';
import { CalendarListfacade } from '../../facades/calendar-list.facade';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
})
export class CalendarListComponent implements OnInit {

  public selectedView: 'card-view' | 'list-view' = 'card-view';
  public navbarOpened = false;

  public calendarList$ = this.calendarListfacade.calendar$;

  constructor(
    private calendarListfacade: CalendarListfacade
  ) { }

  ngOnInit(): void {
  }

  public trackByItems(index: number, item: EventItem) {
    return `${item.id}/${item.instance}`;
  }

  public showMoreEvents() {
    this.calendarListfacade.LoadMoreEvents();
  }

  public openCloseNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

  public selectView(view: 'card-view' | 'list-view'): void {
    this.selectedView = view;
  }

}
