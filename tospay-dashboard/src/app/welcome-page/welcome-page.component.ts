import { Component, OnInit } from '@angular/core';
export interface iTransactionData {
  status: string;
  date: {
    day: string;
    time: string;
  };
  account: string;
  amount: number;
}
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  dataSource: iTransactionData[] = [];
  displayedColumns: string[] = ['status', 'date', 'account', 'amount'];

  constructor() { }

  ngOnInit() {
    this.createData();
    console.log(this.dataSource);
  }
  createData(){
    const data: any= {
      status: 'Complete',
      date: {
        day: 'Today',
        time: '1:52 am',
      },
      account: 'Kenya Ports Authority',
      amount: 1250
    };
    for (let i = 0; i < 7; i++) {
      this.dataSource.push(data);
    }
  }

}
