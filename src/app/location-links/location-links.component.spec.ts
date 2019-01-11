import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationLinksComponent } from './location-links.component';

describe('LocationLinksComponent', () => {
  let component: LocationLinksComponent;
  let fixture: ComponentFixture<LocationLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
