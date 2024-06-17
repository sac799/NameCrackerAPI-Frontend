import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameParserComponent } from './name-parser.component';

describe('NameParserComponent', () => {
  let component: NameParserComponent;
  let fixture: ComponentFixture<NameParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameParserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
