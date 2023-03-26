import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCampaignCardComponent } from './home-campaign-card.component';

describe('HomeCampaignCardComponent', () => {
  let component: HomeCampaignCardComponent;
  let fixture: ComponentFixture<HomeCampaignCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCampaignCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCampaignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
