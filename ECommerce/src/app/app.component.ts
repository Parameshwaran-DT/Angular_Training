import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users:any;
  title: string = "Custom Directives in Angular";
  show=true;
 
  colors = ['CYAN', 'GREEN', 'YELLOW'];  
  myColor = ''; 

  constructor(private appService: AppService){}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    return this.appService.getAllUser().subscribe(data=> this.users=data);
  }

  
}

