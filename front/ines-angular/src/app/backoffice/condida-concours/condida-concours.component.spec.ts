import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidaConcoursComponent } from './condida-concours.component';

describe('CondidaConcoursComponent', () => {
  let component: CondidaConcoursComponent;
  let fixture: ComponentFixture<CondidaConcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidaConcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidaConcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
