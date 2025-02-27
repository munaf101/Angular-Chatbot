import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilemanagaerDetailsComponent } from './filemanagaer-details.component';

describe('FilemanagaerDetailsComponent', () => {
  let component: FilemanagaerDetailsComponent;
  let fixture: ComponentFixture<FilemanagaerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilemanagaerDetailsComponent]
    });
    fixture = TestBed.createComponent(FilemanagaerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
