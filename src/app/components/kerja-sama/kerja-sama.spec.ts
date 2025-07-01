import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerjaSama } from './kerja-sama';

describe('KerjaSama', () => {
  let component: KerjaSama;
  let fixture: ComponentFixture<KerjaSama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KerjaSama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KerjaSama);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
