import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { RealiStoreService } from '../reali-store/reali-store.service';

@Component ({
  selector: 'app-upper-buttons-panel',
  templateUrl: './upper-buttons-panel.component.html',
  styleUrls: ['./upper-buttons-panel.component.css']
})

export class UpperButtonsPanelComponent implements OnInit {

  isNameTabButtonDisabled$: Observable<boolean>;
  isEmailTabButtonDisabled$: Observable<boolean>;
  isPhoneTabButtonDisabled$: Observable<boolean>;

  isNameValueEmpty: boolean;
  isEmailValueEmpty: boolean;
  isPhoneValueEmpty: boolean;

  constructor( private realiStoreService: RealiStoreService) {
  }

  ngOnInit() {
    this.isNameTabButtonDisabled$ = this.realiStoreService.isNameTabButtonDisabled$();
    this.isEmailTabButtonDisabled$ = this.realiStoreService.isEmailTabButtonDisabled$();
    this.isPhoneTabButtonDisabled$ = this.realiStoreService.isPhoneTabButtonDisabled$();
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

  onButton1Click($event) {
    this.realiStoreService.showNameTab();
    this.realiStoreService.updateButtonsDisable(false, this.isNameValueEmpty, this.isNameValueEmpty);
  }

  onButton2Click($event) {
    this.realiStoreService.showEmailTab();
    this.realiStoreService.updateButtonsDisable(this.isEmailValueEmpty, false, this.isEmailValueEmpty);
  }

  onButton3Click($event) {
    this.realiStoreService.showPhoneTab();
    this.realiStoreService.updateButtonsDisable(this.isPhoneValueEmpty, this.isPhoneValueEmpty, false);
  }



}
