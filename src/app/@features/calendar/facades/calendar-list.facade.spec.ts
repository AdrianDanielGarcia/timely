import { TestBed } from '@angular/core/testing';

import { CalendarListfacade } from './calendar-list.facade';

describe('CalendarListfacade', () => {
  let facade: CalendarListfacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    facade = TestBed.inject(CalendarListfacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
