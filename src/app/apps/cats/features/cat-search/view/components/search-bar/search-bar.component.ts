import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AsyncPipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelect, MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {getCats} from '../../../data-access/state/cat/cat.actions';

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

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.filterForm = this.fb.group({
      breed: [''],
      limit: [10],
    });
  }

  private store = inject(Store<{cats: any[]}>);
  breeds = this.store.select('breeds');

  onSubmit() {
    const value = this.filterForm.value;
    console.log(value);
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

}
