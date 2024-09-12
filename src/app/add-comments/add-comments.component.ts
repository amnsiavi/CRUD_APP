import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-comments',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-comments.component.html',
  styleUrl: './add-comments.component.css',
})
export class AddCommentsComponent {
  @Output() cancel = new EventEmitter();
  @Output() adding = new EventEmitter();

  enteredPostId = '1';
  enteredName = '';
  enteredEmail = '';
  enteredComment = '';

  onCancel() {
    this.cancel.emit();
  }
  onAddingTask() {
    this.adding.emit({
      postId: parseInt(this.enteredPostId),
      name: this.enteredName,
      email: this.enteredEmail,
      body: this.enteredComment,
      id: Math.floor(Math.random() * 15),
    });
  }
}
