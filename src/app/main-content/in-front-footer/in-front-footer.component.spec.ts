import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InFrontFooterComponent } from './in-front-footer.component';

describe('FooterComponent', () => {
  let component: InFrontFooterComponent;
  let fixture: ComponentFixture<InFrontFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InFrontFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InFrontFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
