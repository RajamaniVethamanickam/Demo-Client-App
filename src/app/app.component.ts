import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { PalmapiServices } from './_services/palmapiservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Demo-Client-App';
  users:any;
  data:any={
    ShowroomId:"20171",
    AccountManagerPEID:"26463",
    LoggedIn_PEID:"26463"
  };

  constructor(private http: HttpClient, private palmApi:PalmapiServices){}
ngOnInit(): void {
  this.Search();
}

  Search(){
    this.palmApi.postAsync("Menu/RetriveSearchRecords", this.data).subscribe({
      next: response => {
        console.log(response);
      },
      error: error =>console.log(error),
      complete:()=>console.log('complete')
    })
  }
}
