
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import * as codeData from '../../../shared/codeViewData/modal'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],

})
export class ModalComponent implements OnInit {

  modalOptions!: NgbModalOptions;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }
  BasicOpen(basicmodal:any) {
    this.modalService.open(basicmodal);
  }
  SmallOpen(smallmodal:any) {
    this.modalService.open(smallmodal, { size: 'sm' });
  }
  LargeOpen(largemodal:any) {
    this.modalService.open(largemodal, { size: 'lg' });
  }
  SuccessOpen(successmodal:any) {
    this.modalService.open(successmodal, { centered: true });
  }
  WarningOpen(warningmodal:any) {
    this.modalService.open(warningmodal, { centered: true });
  }

  effectScale(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSlideRight(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSlideBottom(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectNewspaper(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectFall(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectFlipHorizontal(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectFlipVertical(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSuperScaled(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSign(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectRotateBottom(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectRotateLeft(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectJustMe(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }

  SmallSizeOpen(smallsizemodal:any) {
    this.modalService.open(smallsizemodal, { size: 'sm' });
  }
  DefaultSizeOpen(defaultsizemodal:any) {
    this.modalService.open(defaultsizemodal);
  }
  LargeSizeOpen(largesizemodal:any) {
    this.modalService.open(largesizemodal, { size: 'lg' });
  }


  html1 = codeData.modalHTML1;
  ts1 = codeData.modalTS1;
  html2 = codeData.modalHTML2;
  ts2 = codeData.modalTS2;
  html3 = codeData.modalHTML3;
  ts3 = codeData.modalTS3;
  html4 = codeData.modalHTML4;
  ts4 = codeData.modalTS4;
  html5 = codeData.modalHTML5;
  ts5 = codeData.modalTS5;
  html6 = codeData.modalHTML6;
  ts6 = codeData.modalTS6;
}