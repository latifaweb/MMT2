import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosialMedia } from './sosial-media';

describe('SosialMedia', () => {
  let component: SosialMedia;
  let fixture: ComponentFixture<SosialMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SosialMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SosialMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
