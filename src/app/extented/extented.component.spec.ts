import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtentedComponent } from './extented.component';

describe('ExtentedComponent', () => {
  let component: ExtentedComponent;
  let fixture: ComponentFixture<ExtentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtentedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
