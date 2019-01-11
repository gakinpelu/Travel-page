import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapeCodComponent } from './cape-cod.component';

describe('CapeCodComponent', () => {
  let component: CapeCodComponent;
  let fixture: ComponentFixture<CapeCodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapeCodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapeCodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
