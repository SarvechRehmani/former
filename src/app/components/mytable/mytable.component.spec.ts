import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytableComponent } from './mytable.component';

describe('MytableComponent', () => {
  let component: MytableComponent;
  let fixture: ComponentFixture<MytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MytableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
