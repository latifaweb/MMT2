import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linktree } from './linktree';

describe('Linktree', () => {
  let component: Linktree;
  let fixture: ComponentFixture<Linktree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linktree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Linktree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
