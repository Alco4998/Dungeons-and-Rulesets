import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLinkComponent } from './character-link.component';

describe('CharacterLinkComponent', () => {
  let component: CharacterLinkComponent;
  let fixture: ComponentFixture<CharacterLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
