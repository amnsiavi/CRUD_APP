import {
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CloseIconComponent } from '../shared/close-icon/close-icon.component';
import { DeleteComponent } from '../shared/delete/delete.component';
import { AddCommentComponent } from '../shared/add-comment/add-comment.component';
import { NoDataFallbackTextComponent } from '../no-data-fallback-text/no-data-fallback-text.component';
import { AddCommentsComponent } from '../add-comments/add-comments.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CloseIconComponent,
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
  @Output() closeTable = new EventEmitter();
  @Input({ required: true }) tableData?: any[];

  isAddingComments = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.tableData);
  }

  onTableClose() {
    this.closeTable.emit();
  }
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
