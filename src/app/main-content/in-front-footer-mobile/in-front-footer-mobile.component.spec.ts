import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InFrontFooterMobileComponent } from './in-front-footer-mobile.component';

describe('InFrontFooterMobileComponent', () => {
  let component: InFrontFooterMobileComponent;
  let fixture: ComponentFixture<InFrontFooterMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InFrontFooterMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InFrontFooterMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
