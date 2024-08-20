import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mapaComponent } from "./mapa.component";

describe( 'mapaComponent', () => {
  let component: mapaComponent;
  let fixture: ComponentFixture<mapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [mapaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(mapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
