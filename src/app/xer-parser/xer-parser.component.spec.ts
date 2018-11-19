import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XerParserComponent } from './xer-parser.component';

describe('XerParserComponent', () => {
  let component: XerParserComponent;
  let fixture: ComponentFixture<XerParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XerParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XerParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
