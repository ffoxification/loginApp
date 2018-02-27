import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaregistoComponent } from './paginaregisto.component';

describe('PaginaregistoComponent', () => {
  let component: PaginaregistoComponent;
  let fixture: ComponentFixture<PaginaregistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaregistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaregistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
