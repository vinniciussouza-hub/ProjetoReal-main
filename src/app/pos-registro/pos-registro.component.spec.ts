import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosRegistroComponent } from './pos-registro.component';

describe('PosRegistroComponent', () => {
  let component: PosRegistroComponent;
  let fixture: ComponentFixture<PosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
