import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienRowComponent } from './alien-row.component';

describe('AlienRowComponent', () => {
  let component: AlienRowComponent;
  let fixture: ComponentFixture<AlienRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
