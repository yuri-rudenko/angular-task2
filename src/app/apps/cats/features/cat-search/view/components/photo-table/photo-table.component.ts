import {Component, effect, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCats} from '../../../data-access/state/cat/cat.actions';
import {toSignal} from '@angular/core/rxjs-interop';
import {AsyncPipe, CommonModule} from '@angular/common';
import {CatImageComponent} from '../cat-image/cat-image.component';

@Component({
  selector: 'app-photo-table',
  imports: [AsyncPipe, CatImageComponent],
  templateUrl: './photo-table.component.html',
  styleUrl: './photo-table.component.css',
  standalone: true,
})
export class PhotoTableComponent implements OnInit {
  private store = inject(Store<{cats: any[]}>);
  cats = this.store.select(state => state.cats.cats);
  loading = this.store.select(state => state.cats.loading);

  constructor() {
    effect(() => {
      console.log('Cats updated:', this.cats);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getCats({}));
  }

}
