import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/service/theme.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.defaultTheme();
  }

  defaultTheme() {
    this.themeService.setDefaultTheme();
  }

  theme1() {
    this.themeService.setLightTheme();
  }

  theme2() {
    this.themeService.setDarkTheme();
  }

}
