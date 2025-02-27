import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  @Input() title!: string;
  @Input() icon!: string;
  @Input() title1!: string;
  @Input() title2!: string;
  @Input() activeitem!: string;
  
  @Input() item!: string;
  @Input() icon1!: string;
  @Input() item1!: string;
  @Input() item2!: string;
  @Input() activetitle!: string;
}
