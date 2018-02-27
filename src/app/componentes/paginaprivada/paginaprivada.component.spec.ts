import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaprivadaComponent } from './paginaprivada.component';

describe('PaginaprivadaComponent', () => {
  let component: PaginaprivadaComponent;
  let fixture: ComponentFixture<PaginaprivadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaprivadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaprivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
