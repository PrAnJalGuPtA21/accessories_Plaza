import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubaboutComponent } from './subabout.component';

describe('SubaboutComponent', () => {
  let component: SubaboutComponent;
  let fixture: ComponentFixture<SubaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubaboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
