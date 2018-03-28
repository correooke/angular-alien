import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAliensComponent } from './search-aliens.component';

describe('SearchAliensComponent', () => {
  let component: SearchAliensComponent;
  let fixture: ComponentFixture<SearchAliensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAliensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAliensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
