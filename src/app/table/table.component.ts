import {
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { DeleteComponent } from '../shared/delete/delete.component';
import { AddCommentComponent } from '../shared/add-comment/add-comment.component';
import { NoDataFallbackTextComponent } from '../no-data-fallback-text/no-data-fallback-text.component';
import { AddCommentsComponent } from '../add-comments/add-comments.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    DeleteComponent,
    AddCommentComponent,
    NoDataFallbackTextComponent,
    AddCommentsComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  @Input({ required: true }) tableData?: any[];

  isAddingComments = false;

  onDataDelete(id: string) {
    this.tableData = this.tableData?.filter((item) => item.id !== id);
  }
  onAddingComments() {
    this.isAddingComments = true;
  }
  cancelComments() {
    this.isAddingComments = false;
  }
  newComment(data: {}) {
    if (this.tableData === undefined) {
      return this.tableData;
    }
    this.tableData.unshift(data);
    this.isAddingComments = false;
  }
}
