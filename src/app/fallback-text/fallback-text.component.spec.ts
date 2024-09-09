import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallbackTextComponent } from './fallback-text.component';

describe('FallbackTextComponent', () => {
  let component: FallbackTextComponent;
  let fixture: ComponentFixture<FallbackTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FallbackTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallbackTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
