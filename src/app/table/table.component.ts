import {
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CloseIconComponent } from '../shared/close-icon/close-icon.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CloseIconComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  @Output() closeTable = new EventEmitter();
  @Input({ required: true }) tableData?: any[];

  onTableClose() {
    this.closeTable.emit();
  }
}
