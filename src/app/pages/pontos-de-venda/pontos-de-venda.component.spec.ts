import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosDeVendaComponent } from './pontos-de-venda.component';

describe('PontosDeVendaComponent', () => {
  let component: PontosDeVendaComponent;
  let fixture: ComponentFixture<PontosDeVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PontosDeVendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PontosDeVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
