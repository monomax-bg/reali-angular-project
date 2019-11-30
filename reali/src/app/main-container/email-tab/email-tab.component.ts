import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RealiStoreService} from '../reali-store/reali-store.service';

@Component ({
  selector: 'app-email-tab',
  templateUrl: './email-tab.component.html',
  styleUrls: ['./email-tab.component.css']
})

export class EmailTabComponent implements OnInit {

  userEmail$: Observable<string>;

  constructor( private realiStoreService: RealiStoreService) {
  }

  ngOnInit() {
    this.userEmail$ = this.realiStoreService.userEmail$();
  }

  onUserEmailChange($event) {
    this.realiStoreService.updateEmailValue($event.target.value);
  }

  onUserEmailInput($event) {
    if ($event.target.value.length === 0) {
      this.activateUpdatesForEmptyOrNotInput($event.target.value);
    } else if ($event.data && $event.target.value.length === $event.data.length) {
      this.activateUpdatesForEmptyOrNotInput($event.target.value);
    }
  }

  activateUpdatesForEmptyOrNotInput(emailValue: string) {
    this.realiStoreService.updateEmailValue(emailValue);
    this.realiStoreService.updateButtonsDisable((emailValue.length === 0), false, (emailValue.length === 0));
  }

}
