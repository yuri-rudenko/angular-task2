import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  MatDialog,
} from '@angular/material/dialog';
import {ImageDialogComponent} from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-cat-image',
  templateUrl: './cat-image.component.html',
  imports: [
    MatProgressSpinnerModule
  ],
  styleUrls: ['./cat-image.component.css']
})
export class CatImageComponent implements OnChanges {

  readonly dialog = inject(MatDialog);

  @Input() src!: string;

  imageLoaded = false;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']) {
      this.imageLoaded = false;
    }
  }

  onLoad(): void {
    this.imageLoaded = true;
  }

  openDialog(): void {
    this.dialog.open(ImageDialogComponent, {
      data: { src: this.src },
    });
  }

}
