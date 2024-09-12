import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  @Input({ required: true }) selectedId!: string;
  @Output() deleteSelected = new EventEmitter<string>();

  onDelete() {
    this.deleteSelected.emit(this.selectedId);
  }
}
