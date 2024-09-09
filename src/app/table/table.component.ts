import { Component, ViewEncapsulation } from '@angular/core';
import { CloseIconComponent } from '../shared/close-icon/close-icon.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CloseIconComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {}
