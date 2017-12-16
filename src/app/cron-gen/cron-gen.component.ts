import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SchdOptions } from '../schd-options.enum';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cron-gen',
  templateUrl: './cron-gen.component.html',
  styleUrls: ['./cron-gen.component.css']
})
export class CronGenComponent implements OnInit {

  secondsform: FormGroup;
  minutesform: FormGroup;
  hoursform: FormGroup;
  dailyform: FormGroup;
  weeklyform: FormGroup;
  monthlyform: FormGroup;
  selectedItem: number;
  cronExpression = '';

  @Output() cron: EventEmitter<String> = new EventEmitter<String>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.secondsform = this.fb.group({
      seconds: [null, [Validators.required, Validators.min(1), Validators.max(59)]]
    });

    this.minutesform = this.fb.group({
      seconds: [null, [Validators.required, Validators.min(1), Validators.max(59)]],
      minutes: [null, [Validators.required, Validators.min(1), Validators.max(59)]]
    });

    this.hoursform = this.fb.group({
      seconds: [null, [Validators.required, Validators.min(1), Validators.max(59)]],
      minutes: [null, [Validators.required, Validators.min(1), Validators.max(59)]],
      hours:  [null, [Validators.required, Validators.min(1), Validators.max(23)]]
    });

    this.dailyform = this.fb.group({
      seconds: [null, [Validators.required, Validators.min(1), Validators.max(59)]],
      minutes: [null, [Validators.required, Validators.min(1), Validators.max(59)]],
      hours: [null, [Validators.required, Validators.min(1), Validators.max(23)]]
    });

    this.weeklyform = this.fb.group({
      seconds: [null, [Validators.required, Validators.min(1), Validators.max(59)]],
      minutes: [null, [Validators.required, Validators.min(1), Validators.max(59)]],
      hours: [null, [Validators.required, Validators.min(1), Validators.max(23)]],
      week: [0, Validators.required]
    });

    this.monthlyform = this.fb.group({
      seconds: [null, [Validators.required, Validators.min(1), Validators.max(59)]],
      minutes: [null, [Validators.required, Validators.min(1), Validators.max(59)]],
      hours: [null, [Validators.required, Validators.min(1), Validators.max(23)]],
      dayOfWeek: [0, Validators.required]
    });

    this.setupChangeListener();
  }

  secondlySubmit = function() {
    this.cronExpression = '0/' + this.secondsform.controls.seconds.value + ' 0 0 0 0 0';
    this.cron.emit(this.cronExpression);
  };

  minutesSubmit() {
    const sec = this.minutesform.controls.seconds.value;
    const min = this.minutesform.controls.minutes.value;
    this.cronExpression = '0/' + sec + ' 0/' + min + ' 0 0 0 0';
    this.cron.emit(this.cronExpression);
  }

  hourlySubmit() {
    const sec = this.hoursform.controls.seconds.value;
    const min = this.hoursform.controls.minutes.value;
    const hour = this.hoursform.controls.minutes.value;
    this.cronExpression = '0/' + sec + ' 0/' + min + ' 0/' + hour + ' 0 0 0';
    this.cron.emit(this.cronExpression);
  }

  dailySubmit() {
    const sec = this.dailyform.controls.seconds.value;
    const min = this.dailyform.controls.minutes.value;
    const hour = this.dailyform.controls.minutes.value;
    this.cronExpression = '0/' + sec + ' 0/' + min + ' 0/' + hour + ' 0 0 0';
    this.cron.emit(this.cronExpression);
  }

  weeklySubmit() {
    const sec = this.weeklyform.controls.seconds.value;
    const min = this.weeklyform.controls.minutes.value;
    const hour = this.weeklyform.controls.minutes.value;
    const week = this.weeklyform.controls.week.value;
    this.cronExpression = '0/' + sec + ' 0/' + min + ' 0/' + hour + ' 0 0 0';
    this.cron.emit(this.cronExpression);
  }

  monthlySubmit() {
    const sec = this.monthlyform.controls.seconds.value;
    const min = this.monthlyform.controls.minutes.value;
    const hour = this.monthlyform.controls.minutes.value;
    const dayOfWeek = this.monthlyform.controls.dayOfWeek.value;
    this.cronExpression = '0/' + sec + ' 0/' + min + ' 0/' + hour + ' 0 0 0';
    this.cron.emit(this.cronExpression);
  }

  setupChangeListener() {
    this.secondsform.valueChanges.subscribe(val => {
      if (this.secondsform.valid) {
        this.secondlySubmit();
      }else {
        this.cronExpression = '';
        this.cron.emit(this.cronExpression);
      }
    });

    this.minutesform.valueChanges.subscribe(val => {
      if (this.minutesform.valid) {
        this.minutesSubmit();
      }else {
        this.cronExpression = '';
        this.cron.emit(this.cronExpression);
      }
    });

    this.hoursform.valueChanges.subscribe(val => {
      if (this.hoursform.valid) {
        this.hourlySubmit();
      }else {
        this.cronExpression = '';
        this.cron.emit(this.cronExpression);
      }
    });

    this.dailyform.valueChanges.subscribe(val => {
      if (this.dailyform.valid) {
        this.dailySubmit();
      }else {
        this.cronExpression = '';
        this.cron.emit(this.cronExpression);
      }
    });

    this.weeklyform.valueChanges.subscribe(val => {
      if (this.weeklyform.valid) {
        this.weeklySubmit();
      }else {
        this.cronExpression = '';
        this.cron.emit(this.cronExpression);
      }
    });

    this.monthlyform.valueChanges.subscribe(val => {
      if (this.monthlyform.valid) {
        this.monthlySubmit();
      }else {
        this.cronExpression = '';
        this.cron.emit(this.cronExpression);
      }
    });
  }

}
