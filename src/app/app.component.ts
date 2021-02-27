import { Component } from '@angular/core';
import { DayService, WeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel, GroupModel } from '@syncfusion/ej2-angular-schedule';
import { doctorData } from './datasource';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DayService, WeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class AppComponent {
  public viewBy: boolean = false;
  public selectedDate: Date = new Date(2018, 3, 5);
  public views: Array<string> = ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'];
  public eventSettings: EventSettingsModel = {
    dataSource: doctorData
  };
  public group: GroupModel = {
    resources: ['Doctors']
  };
  public allowMultipleDoctors: Boolean = true;
  public doctorDataSource: any = [
    {
      text: 'Will Smith', id: 1, color: '#ea7a57', designation: 'Cardioligst',
      isChecked: false
    },
    {
      text: 'Alice', id: 2, color: '#7fa900', designation: 'Neurologist',
      isChecked: false
    },
    {
      text: 'Robson', id: 3, color: '#7fa900', designation: 'Orthopedic Surgeon',
      isChecked: false
    },
    {
      text: 'Rohit', id: 4, color: '#7fa903', designation: 'Hair Surgeon',
      isChecked: false
    },
  ];

  selectedDoctorList: any = [];

  constructor() {
    // this.selectedDoctorList.push(this.doctorDataSource[0]);
    this.initializeDefaultData(1);
  }

  isChecked(e: any, item: any) {
    this.selectedDoctorList = this.doctorDataSource.filter((value: { isChecked: boolean; }, index: any) => {
      return value.isChecked
    });

    console.log(this.selectedDoctorList);
  }

  initializeDefaultData(id: number) {
    this.doctorDataSource = this.doctorDataSource
      .map((k: any) => {
        if (k.id === id) {
          k.isChecked = true;
        }
        return k;
      });

    this.selectedDoctorList.push(this.doctorDataSource
      .find((v: { id: number; }) => v.id === id));
  }
}
