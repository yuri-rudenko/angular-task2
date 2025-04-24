import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatSelect, MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { getCats } from '../../../data-access/state/cat/cat.actions';

@Component({
  selector: 'app-search-bar',
  imports: [
    MatInputModule,
    AsyncPipe,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  private store = inject(Store<{cats: any[]}>);


  breeds = this.store.select('breeds');
  page = this.store.select(state => state.cats.page);

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.filterForm = this.fb.group({
      breed: [''],
      limit: [10],
    });

  }

  onSubmit() {
    const value = this.filterForm.value;
    this.store.dispatch(getCats({
      breed: value.breed,
      limit: value.limit
    }));
  }

  onBreedChange(event: MatSelectChange, breedSelect: MatSelect) {
    const breedControl = this.filterForm.get('breed');

    if (event.value.includes('none')) {
      breedControl?.setValue(['']);
      breedSelect.close();
    }
  }

  resetBreeds() {
    this.filterForm.get('breed')?.setValue(['']);
    this.store.dispatch(getCats({}));
  }

}
