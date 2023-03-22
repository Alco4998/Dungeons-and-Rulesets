import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampainLinkComponent } from './campain-link.component';

describe('CampainLinkComponent', () => {
  let component: CampainLinkComponent;
  let fixture: ComponentFixture<CampainLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampainLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampainLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
