import {Component, OnInit} from '@angular/core';
import { RealiStoreService } from '../reali-store/reali-store.service';

@Component ({
  selector: 'app-lower-buttons-panel',
  templateUrl: './lower-buttons-panel.component.html',
  styleUrls: ['./lower-buttons-panel.component.css']
})

export class LowerButtonsPanelComponent implements OnInit {

  isNameValueEmpty: boolean;
  isEmailValueEmpty: boolean;
  isPhoneValueEmpty: boolean;

  constructor( private realiStoreService: RealiStoreService) {
  }

  ngOnInit() {
    this.realiStoreService.userName$().subscribe((userName: string) => {
      this.isNameValueEmpty = userName.length === 0;
    });
    this.realiStoreService.userEmail$().subscribe((userEmail: string) => {
      this.isEmailValueEmpty = userEmail.length === 0;
    });
    this.realiStoreService.userPhone$().subscribe((userPhone: string) => {
      this.isPhoneValueEmpty = userPhone.length === 0;
    });
  }

  onButtonSubmitClick($event) {
    this.realiStoreService.showSummaryTab();
  }

  onButtonClearClick($event) {
    this.realiStoreService.clearAllValues();
    this.realiStoreService.showNameTab();
    this.realiStoreService.updateButtonsDisable(false, this.isNameValueEmpty, this.isNameValueEmpty);
  }

}
