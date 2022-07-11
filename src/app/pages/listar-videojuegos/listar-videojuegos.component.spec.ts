import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVideojuegosComponent } from './listar-videojuegos.component';

describe('ListarVideojuegosComponent', () => {
  let component: ListarVideojuegosComponent;
  let fixture: ComponentFixture<ListarVideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVideojuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
