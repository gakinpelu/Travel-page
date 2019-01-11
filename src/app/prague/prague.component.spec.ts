import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PragueComponent } from './prague.component';

describe('PragueComponent', () => {
  let component: PragueComponent;
  let fixture: ComponentFixture<PragueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PragueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PragueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
