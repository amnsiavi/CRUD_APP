import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent {
  @Output() openModal = new EventEmitter();

  onOpen() {
    this.openModal.emit();
  }
}
