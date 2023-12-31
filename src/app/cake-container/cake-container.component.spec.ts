import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeContainerComponent } from './cake-container.component';

describe('CakeContainerComponent', () => {
  let component: CakeContainerComponent;
  let fixture: ComponentFixture<CakeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeContainerComponent]
    });
    fixture = TestBed.createComponent(CakeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
