import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DannyComponent } from './danny.component';

describe('DannyComponent', () => {
  let component: DannyComponent;
  let fixture: ComponentFixture<DannyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DannyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DannyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
