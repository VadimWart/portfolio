import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkMobileComponent } from './my-work-mobile.component';

describe('MyWorkMobileComponent', () => {
  let component: MyWorkMobileComponent;
  let fixture: ComponentFixture<MyWorkMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWorkMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyWorkMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
