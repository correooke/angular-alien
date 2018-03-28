import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienInfoComponent } from './alien-info.component';

describe('AlienInfoComponent', () => {
  let component: AlienInfoComponent;
  let fixture: ComponentFixture<AlienInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
