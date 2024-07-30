import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConvBackComponent } from './update-conv-back.component';

describe('UpdateConvBackComponent', () => {
  let component: UpdateConvBackComponent;
  let fixture: ComponentFixture<UpdateConvBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateConvBackComponent]
    });
    fixture = TestBed.createComponent(UpdateConvBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
