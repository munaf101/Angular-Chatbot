import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalGalleryRef, ModalGalleryService ,Image} from '@ks89/angular-modal-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {


  constructor(private modalGalleryService: ModalGalleryService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
  }

  openImageModalRowDescription(id: number, image: Image): void {
    console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    this.modalGalleryService.open({
      id,
      images: this.imagesRect,
      currentImage: this.imagesRect[index]
    }) as ModalGalleryRef;
  }
  
  addRandomImage(): void {

    // add also to imagesRect
    const imageRectToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
    const newImageRect: Image = new Image(this.imagesRect.length - 1 + 1, imageRectToCopy.modal, imageRectToCopy.plain);
    this.imagesRect = [...this.imagesRect, newImageRect];
  }

  trackById(index: number, item: Image): number {
    return item.id;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

  imagesRect: Image[] = [
     new Image( 0, {img:"./assets/images/photos/1.jpg", }, {img: "./assets/images/photos/1.jpg"}),
     new Image(1, {img: "./assets/images/photos/2.jpg" }, {img: "./assets/images/photos/2.jpg"}),
     new Image( 2, { img: "./assets/images/media/3.jpg" },{img: "./assets/images/media/3.jpg"} ),
     new Image( 3, {img:"./assets/images/media/4.jpg",  }, {img: "./assets/images/media/4.jpg"} ),
     new Image(4, {img: "./assets/images/media/5.jpg" }, { img: "./assets/images/media/5.jpg"}),
     new Image(5, {img:  "./assets/images/media/6.jpg", },{img: "./assets/images/media/6.jpg" }),
     new Image(6, {img: "./assets/images/media/7.jpg" }, { img: "./assets/images/media/7.jpg"}),
     new Image(7, {img:  "./assets/images/media/8.jpg", },{img: "./assets/images/media/8.jpg" }),

  
   ];
}
