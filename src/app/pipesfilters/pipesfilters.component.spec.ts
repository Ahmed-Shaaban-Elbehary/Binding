import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesfiltersComponent } from './pipesfilters.component';

describe('PipesfiltersComponent', () => {
  let component: PipesfiltersComponent;
  let fixture: ComponentFixture<PipesfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
