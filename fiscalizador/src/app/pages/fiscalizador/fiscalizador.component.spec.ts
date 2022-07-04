import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalizadorComponent } from './fiscalizador.component';

describe('FiscalizadorComponent', () => {
  let component: FiscalizadorComponent;
  let fixture: ComponentFixture<FiscalizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiscalizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
