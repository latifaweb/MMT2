import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAcara } from './agenda-acara';

describe('AgendaAcara', () => {
  let component: AgendaAcara;
  let fixture: ComponentFixture<AgendaAcara>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaAcara]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaAcara);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
