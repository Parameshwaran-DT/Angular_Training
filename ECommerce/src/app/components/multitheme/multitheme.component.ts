import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/service/theme.service';

@Component({
  selector: 'app-multitheme',
  templateUrl: './multitheme.component.html',
  styleUrls: ['./multitheme.component.scss']
})
export class MultithemeComponent implements OnInit {

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
