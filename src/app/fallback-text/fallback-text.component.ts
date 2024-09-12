import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-fallback-text',
  standalone: true,
  imports: [],
  templateUrl: './fallback-text.component.html',
  styleUrl: './fallback-text.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FallbackTextComponent {
  @Output() toggleDisplay = new EventEmitter();

  onClick() {
    this.toggleDisplay.emit();
  }
}
