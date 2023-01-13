import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveComponent } from './active.component';

describe('ActiveComponent', () => {
  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
