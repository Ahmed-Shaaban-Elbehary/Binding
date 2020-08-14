import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariablComponent } from './template-variabl.component';

describe('TemplateVariablComponent', () => {
  let component: TemplateVariablComponent;
  let fixture: ComponentFixture<TemplateVariablComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateVariablComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateVariablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
