import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';
import { CalendarItemComponent } from './components/calendar-item/calendar-item.component';
import { CalendarListfacade } from './facades/calendar-list.facade';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarCardComponent } from './components/calendar-card/calendar-card.component';
import { CalendarFilterComponent } from './components/calendar-filter/calendar-filter.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DAYJS_DATE_ADAPTER_OPTIONS } from '@utils/date/dayjs-date-adapter.util';
import { MatDayjsDateModule } from '@utils/date/dayjs-date-adapter.module';
import { FilterStateService } from './states/filter-state.service';

@NgModule({
  declarations: [
    CalendarListComponent,
    CalendarItemComponent,
    CalendarCardComponent,
    CalendarFilterComponent
  ],
  providers: [
    CalendarListfacade,
    FilterStateService,
    {
      provide: MAT_DAYJS_DATE_ADAPTER_OPTIONS,
      useValue: { useUtc: true }
    }
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDayjsDateModule
  ]
})
export class CalendarModule { }
