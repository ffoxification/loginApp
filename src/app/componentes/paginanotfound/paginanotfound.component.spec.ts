import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginanotfoundComponent } from './paginanotfound.component';

describe('PaginanotfoundComponent', () => {
  let component: PaginanotfoundComponent;
  let fixture: ComponentFixture<PaginanotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginanotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginanotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
