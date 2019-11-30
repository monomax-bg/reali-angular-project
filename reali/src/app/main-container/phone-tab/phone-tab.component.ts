import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RealiStoreService} from '../reali-store/reali-store.service';

@Component ({
  selector: 'app-phone-tab',
  templateUrl: './phone-tab.component.html',
  styleUrls: ['./phone-tab.component.css']
})

export class PhoneTabComponent implements OnInit {

  userPhone$: Observable<string>;

  constructor( private realiStoreService: RealiStoreService) {
  }

  ngOnInit() {
    this.userPhone$ = this.realiStoreService.userPhone$();
  }

  onUserPhoneChange($event) {
    this.realiStoreService.updatePhoneValue($event.target.value);
  }

  onUserPhoneInput($event) {
    if ($event.target.value.length === 0) {
      this.activateUpdatesForEmptyOrNotInput($event.target.value);
    } else if ($event.data && $event.target.value.length === $event.data.length) {
      this.activateUpdatesForEmptyOrNotInput($event.target.value);
    }
  }

  activateUpdatesForEmptyOrNotInput(phoneValue: string) {
    this.realiStoreService.updatePhoneValue(phoneValue);
    this.realiStoreService.updateButtonsDisable((phoneValue.length === 0), (phoneValue.length === 0), false);
  }

}
