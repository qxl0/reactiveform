import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFormComponentComponent } from './array-form-component.component';

describe('ArrayFormComponentComponent', () => {
  let component: ArrayFormComponentComponent;
  let fixture: ComponentFixture<ArrayFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
