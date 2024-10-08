import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinkComponent } from './sink.component';

describe('SinkComponent', () => {
  let component: SinkComponent;
  let fixture: ComponentFixture<SinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
