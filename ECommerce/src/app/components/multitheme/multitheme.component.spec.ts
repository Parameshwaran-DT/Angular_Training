import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultithemeComponent } from './multitheme.component';

describe('MultithemeComponent', () => {
  let component: MultithemeComponent;
  let fixture: ComponentFixture<MultithemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultithemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultithemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
