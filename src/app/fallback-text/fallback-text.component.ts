import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fallback-text',
  standalone: true,
  imports: [],
  templateUrl: './fallback-text.component.html',
  styleUrl: './fallback-text.component.css',
})
export class FallbackTextComponent {
  @Output() toggleDisplay = new EventEmitter();

  onClick() {
    this.toggleDisplay.emit();
  }
}
