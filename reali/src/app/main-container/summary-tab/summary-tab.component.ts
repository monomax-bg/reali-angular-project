import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { RealiStoreService } from '../reali-store/reali-store.service';

@Component ({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.css']
})

export class SummaryTabComponent implements OnInit {
  userName$: Observable<string>;
  userEmail$: Observable<string>;
  userPhone$: Observable<string>;

  constructor( private realiStoreService: RealiStoreService) {
  }

  ngOnInit() {
    this.userName$ = this.realiStoreService.userName$();
    this.userEmail$ = this.realiStoreService.userEmail$();
    this.userPhone$ = this.realiStoreService.userPhone$();
  }

}
