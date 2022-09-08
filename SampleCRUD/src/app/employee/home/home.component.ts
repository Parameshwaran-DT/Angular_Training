import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allEmployee:Employee[]=[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.employeeService.get().subscribe((data) => {
      console.log(data,"getdata")
      this.allEmployee = data;
    });
  }


}
