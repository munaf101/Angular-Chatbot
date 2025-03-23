import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotTableComponent } from './bot-table.component';

describe('BotTableComponent', () => {
  let component: BotTableComponent;
  let fixture: ComponentFixture<BotTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotTableComponent]
    });
    fixture = TestBed.createComponent(BotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
