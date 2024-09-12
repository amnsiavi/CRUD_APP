import {
  Component,
  inject,
  OnInit,
  signal,
  DestroyRef,
  OnDestroy,
} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FallbackTextComponent } from './fallback-text/fallback-text.component';
import { ApiDataService } from '../services/api-data.service';

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
export class AppComponent implements OnInit {
  title = 'CRUD';
  toggleTable = false;
  comments: any;
  isFetching = signal(false);

  apiService = inject(ApiDataService);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.apiService.loadUserComments().subscribe({
      next: (body) => {
        this.comments = body;
        this.comments = this.comments.splice(0, 10);
      },
      complete: () => {
        setTimeout(() => {
          this.isFetching.set(false);
        }, 4000);
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onToggle() {
    this.toggleTable = !this.toggleTable;
  }
}
