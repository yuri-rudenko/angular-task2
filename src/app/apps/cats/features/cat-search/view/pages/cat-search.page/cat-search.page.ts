import { Component } from '@angular/core';

import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PhotoTableComponent } from '../../components/photo-table/photo-table.component';

@Component({
  selector: 'app-cat-search',
  imports: [
    SearchBarComponent,
    PhotoTableComponent
  ],
  templateUrl: './cat-search.page.html',
  styleUrl: './cat-search.page.css'
})
export class CatSearchPage {

}
