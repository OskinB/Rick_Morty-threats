import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThreatComponent } from './new-threat.component';

describe('NewThreatComponent', () => {
  let component: NewThreatComponent;
  let fixture: ComponentFixture<NewThreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewThreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewThreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
