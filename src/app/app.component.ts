import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FallbackTextComponent } from './fallback-text/fallback-text.component';
import { CloseIconComponent } from './shared/close-icon/close-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TableComponent,
    LoadingSpinnerComponent,
    FallbackTextComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CRUD';
  toggleTable = false;

  onToggle() {
    this.toggleTable = !this.toggleTable;
  }
}
