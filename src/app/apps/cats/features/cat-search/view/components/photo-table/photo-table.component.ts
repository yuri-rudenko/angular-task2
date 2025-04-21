import {Component, effect, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCats} from '../../../data-access/state/cat.actions';
import {toSignal} from '@angular/core/rxjs-interop';
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-photo-table',
  imports: [AsyncPipe],
  templateUrl: './photo-table.component.html',
  styleUrl: './photo-table.component.css',
  standalone: true,
})
export class PhotoTableComponent implements OnInit {
  private store = inject(Store<{cats: any[]}>);
  cats = this.store.select('cats');

  constructor() {
    effect(() => {
      console.log('Cats updated:', this.cats);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getCats({}));
  }

}
