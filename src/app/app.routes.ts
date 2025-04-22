import { Routes } from '@angular/router';
import {CatSearchPage} from './apps/cats/features/cat-search/view/pages/cat-search.page/cat-search.page';
import {BreedsResolver} from './apps/cats/features/cat-search/data-access/resolvers/breeds.resolver';

export const routes: Routes = [
  {
    path: '',
    component: CatSearchPage,
    resolve: {
      breeds: BreedsResolver
    }
  }
];
