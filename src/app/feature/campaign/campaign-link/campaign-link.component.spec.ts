import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignLinkComponent } from './campaign-link.component';

describe('CampaignLinkComponent', () => {
  let component: CampaignLinkComponent;
  let fixture: ComponentFixture<CampaignLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
