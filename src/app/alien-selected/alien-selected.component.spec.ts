import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienSelectedComponent } from './alien-selected.component';

describe('AlienSelectedComponent', () => {
  let component: AlienSelectedComponent;
  let fixture: ComponentFixture<AlienSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
