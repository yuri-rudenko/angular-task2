import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
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
  @Input() src!: string;
  imageLoaded = false;

  readonly dialog = inject(MatDialog);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']) {
      this.imageLoaded = false;
    }
  }

  openDialog(): void {
    this.dialog.open(ImageDialogComponent, {
      data: { src: this.src },
    });
  }

  onLoad(): void {
    this.imageLoaded = true;
  }
}
