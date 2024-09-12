//Angular Packages
import { Component, inject, OnInit, signal, DestroyRef } from '@angular/core';

//Components
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NoDataFallbackTextComponent } from './no-data-fallback-text/no-data-fallback-text.component';

//Service Injections
import { ApiDataService } from '../services/api-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TableComponent,
    LoadingSpinnerComponent,
    NoDataFallbackTextComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'CRUD';

  comments: any;
  isFetching = signal(false);

  apiService = inject(ApiDataService);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.apiService.loadUserComments().subscribe({
      next: (body) => {
        this.comments = body;
        this.comments = this.comments.splice(0, 5);
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
}
