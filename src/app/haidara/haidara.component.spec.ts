import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaidaraComponent } from './haidara.component';

describe('HaidaraComponent', () => {
  let component: HaidaraComponent;
  let fixture: ComponentFixture<HaidaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaidaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaidaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
