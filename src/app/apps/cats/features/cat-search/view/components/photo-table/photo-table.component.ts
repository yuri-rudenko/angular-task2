import {Component, effect, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCats} from '../../../data-access/state/cat.actions';
import {toSignal} from '@angular/core/rxjs-interop';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-photo-table',
  imports: [CommonModule],
  templateUrl: './photo-table.component.html',
  styleUrl: './photo-table.component.css',
  standalone: true,
})
export class PhotoTableComponent implements OnInit {
  private store = inject(Store<{cats: any[]}>);
  cats = toSignal(this.store.select('cats'), { initialValue: [] });

  constructor() {
    effect(() => {
      console.log('Cats updated:', this.cats());
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getCats({}));
  }
}
