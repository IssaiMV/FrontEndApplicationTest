import { Component, OnInit } from '@angular/core';
import { countDaysAreSunday, countTimesLetterRepeats, countWays, getLeapYearsByRange } from 'src/app/ApplicationTest';

@Component({
  selector: 'app-application-test',
  templateUrl: './application-test.component.html',
  styleUrls: ['./application-test.component.scss']
})
export class ApplicationTestComponent implements OnInit {

  countSunday: number = 0;
  numberWays: number = 2;
  leapYears: string = '';
  timesLetter: any;
  constructor() { }

  ngOnInit(): void {
  }

  actividadDos(event: any) {
    event.preventDefault();
    let dateStart = new Date(event.target[0].value);
    let dateEnd = new Date(event.target[1].value);
    dateStart.setDate(dateStart.getDate() + 1);
    dateEnd.setDate(dateEnd.getDate() + 1);
    this.countSunday = countDaysAreSunday(dateStart, dateEnd);
  }
  actividadTres(event: any) {
    event.preventDefault();
    let yearStart = event.target[0].value;
    let yearEnd = event.target[1].value;
    this.leapYears = getLeapYearsByRange(yearStart, yearEnd);
  }
  actividadCinco(event: any) {
    let text = event.target.value;
    this.timesLetter = countTimesLetterRepeats(text);
  }

  actividadSeis(event: any) {
    let num = event.target.value;
    this.numberWays = countWays(num);
  }

}
