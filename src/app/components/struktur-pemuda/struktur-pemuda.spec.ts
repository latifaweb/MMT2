import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrukturPemuda } from './struktur-pemuda';

describe('StrukturPemuda', () => {
  let component: StrukturPemuda;
  let fixture: ComponentFixture<StrukturPemuda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrukturPemuda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrukturPemuda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
