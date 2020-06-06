import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncyBallsComponent } from './bouncy-balls.component';

describe('BouncyBallsComponent', () => {
  let component: BouncyBallsComponent;
  let fixture: ComponentFixture<BouncyBallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouncyBallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncyBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
