import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-no-data-fallback-text',
  standalone: true,
  imports: [],
  templateUrl: './no-data-fallback-text.component.html',
  styleUrl: './no-data-fallback-text.component.css',
})
export class NoDataFallbackTextComponent {
  @Output() addingTask = new EventEmitter();

  onAddingTask() {
    this.addingTask.emit();
  }
}
