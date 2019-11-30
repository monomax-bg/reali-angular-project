import {Component, OnInit} from '@angular/core';
import { RealiStoreService } from './reali-store/reali-store.service';
import {Observable} from 'rxjs';

@Component ({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent implements OnInit {

  isNameTabShown$: Observable<boolean>;
  isEmailTabShown$: Observable<boolean>;
  isPhoneTabShown$: Observable<boolean>;
  isSummaryTabShown$: Observable<boolean>;

  constructor(private realiStoreService: RealiStoreService) {
  }

  ngOnInit() {
    this.isNameTabShown$ = this.realiStoreService.isNameTabShown$();
    this.isEmailTabShown$ = this.realiStoreService.isEmailTabShown$();
    this.isPhoneTabShown$ = this.realiStoreService.isPhoneTabShown$();
    this.isSummaryTabShown$ = this.realiStoreService.isSummaryTabShown$();
  }

}
