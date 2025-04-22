import {Component, inject, Input} from '@angular/core';
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
export class CatImageComponent {
  @Input() src!: string;
  imageLoaded = false;

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: {src: this.src},
    });
  }

  onLoad() {
    this.imageLoaded = true;
  }
}
