import {Component, effect, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {Store} from '@ngrx/store';
import {changePage, getCats} from '../../../data-access/state/cat/cat.actions';
import {toSignal} from '@angular/core/rxjs-interop';
import {AsyncPipe, CommonModule} from '@angular/common';
import {CatImageComponent} from '../cat-image/cat-image.component';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatSelect, MatSelectChange, MatLabel, MatOption,} from '@angular/material/select';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-photo-table',
  imports: [AsyncPipe, CatImageComponent, MatFormField, MatLabel, MatOption, MatSelect, ReactiveFormsModule],
  templateUrl: './photo-table.component.html',
  styleUrl: './photo-table.component.css',
  standalone: true,
})
export class PhotoTableComponent implements OnInit, OnDestroy {

  pageForm: FormGroup;
  catsSub!: Subscription;
  pages: number[] = [0];
  catArray = signal<any[]>([]);
  private allCats: any[] = [];

  private store = inject(Store<{cats: any[]}>);
  cats = this.store.select(state => state.cats.cats);
  loading = this.store.select(state => state.cats.loading);

  constructor(private fb: FormBuilder) {

    this.pageForm = this.fb.group({
      page: 0
    })

  }

  ngOnInit(): void {

    this.store.dispatch(getCats({}));

    this.catsSub = this.store.select(state => state.cats.cats).subscribe(cats => {
      this.allCats = cats;
      this.catArray.set(cats.slice(0, 10));
      this.pages = [...Array(Math.ceil(cats.length / 10)).keys()];
      this.pageForm.setValue({page: 0})
    });
  }

  ngOnDestroy(): void {
    this.catsSub?.unsubscribe();
  }

  onPageChange(event: MatSelectChange) {
    const pageValue: number = this.pageForm.get('page')?.value;

    this.catArray.set(this.allCats.slice(pageValue * 10, pageValue * 10 + 10));

    this.store.dispatch(changePage({ page: pageValue }));
    console.log(pageValue);
  }

}
