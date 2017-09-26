import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar'
import * as moment from 'moment'

import { UserProvider } from '../../providers/user/user'

@IonicPage({
  name: 'goal-calendar',
  segment: 'goal/:id/calendar'
})
@Component({
  selector: 'page-goal-detail-calendar',
  templateUrl: 'goal-detail-calendar.html',
})
export class GoalDetailCalendarPage {

  _daysConfig: DayConfig[] = [];
  event:any = {};
  selectDay:any;

  calendarOptions: CalendarComponentOptions = {
    from:new Date(2009,1,1),
    to:new Date(),
    pickMode: 'single',
    daysConfig: this._daysConfig,
    monthFormat: 'yyyy 年 MM 月 ',
    weekdays: ['天', '一', '二', '三', '四', '五', '六'],
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userProvider: UserProvider,
              private app: App) {
  }

  ionViewDidLoad() {
    this.getGoalCalendar();
    this.selectDay = moment().format("YYYY-MM-DD");
    this.getGoalDay();
  }

  getGoalCalendar() {
    this.userProvider.getGoalCalendar(this.navParams.get('id')).then((data)=>{
      data.forEach((item,index)=>{
        let cssClass:string = "between";
        if(index == 0 ) cssClass = "start";
        if(index == data.length-1 ) cssClass = "end";

        this._daysConfig.push({
          date: new Date(item.checkin_day),
          cssClass: cssClass
        })
      });
    });
  }

  getGoalDay() {
    this.userProvider.getGoalDay(this.navParams.get('id'),this.selectDay).then((data)=>{
      if(Object.keys(data).length === 0) {
        this.event = {};
      } else {
        this.event = data;
      }
      console.log(!this.event);
    });
  }

  onChange($event) {
    this.selectDay = $event;
    this.getGoalDay();
  }

  goEventDetailPage(id) {
    this.app.getRootNav().push('event-detail',{id:id});
  }

  goGoalCheckinPage() {
    let id = this.navParams.get('id');
    this.app.getRootNav().push('goal-checkin',{id:id,day:this.selectDay});
  }

}