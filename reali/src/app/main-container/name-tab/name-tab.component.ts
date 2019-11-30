import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { RealiStoreService } from '../reali-store/reali-store.service';

@Component ({
  selector: 'app-name-tab',
  templateUrl: './name-tab.component.html',
  styleUrls: ['./name-tab.component.css']
})

export class NameTabComponent implements OnInit {
  userName$: Observable<string>;

  constructor( private realiStoreService: RealiStoreService) {
  }

  ngOnInit() {
    this.userName$ = this.realiStoreService.userName$();
  }

  onUserNameChange($event) {
    this.realiStoreService.updateNameValue($event.target.value);
  }

  onUserNameInput($event) {
    if ($event.target.value.length === 0) {
      this.activateUpdatesForEmptyOrNotInput($event.target.value);
    } else if ($event.data && $event.target.value.length === $event.data.length) {
      this.activateUpdatesForEmptyOrNotInput($event.target.value);
    }
  }

  activateUpdatesForEmptyOrNotInput(nameValue: string) {
    this.realiStoreService.updateNameValue(nameValue);
    console.log(nameValue);
    this.realiStoreService.updateButtonsDisable(false, (nameValue.length === 0), (nameValue.length === 0));
  }

}
