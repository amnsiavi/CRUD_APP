import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-close-icon',
  standalone: true,
  imports: [],
  templateUrl: './close-icon.component.html',
  styleUrl: './close-icon.component.css',
})
export class CloseIconComponent {
  @Output() closeDisplay = new EventEmitter();

  onClose() {
    this.closeDisplay.emit();
  }
}
