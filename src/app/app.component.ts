import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CatSearchPage
} from './apps/cats/features/cat-search/view/pages/cat-search.page/cat-search.page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CatSearchPage],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'task2';
}
