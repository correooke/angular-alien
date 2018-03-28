import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienFilterComponent } from './alien-filter.component';

describe('AlienFilterComponent', () => {
  let component: AlienFilterComponent;
  let fixture: ComponentFixture<AlienFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
