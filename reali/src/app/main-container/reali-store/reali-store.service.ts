import { Injectable } from '@angular/core';
import { createFeatureSelector, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { RealiStoreState } from './reali-store.state';
import {
  selectEmailTabButtonDisabled,
  selectNameTabButtonDisabled,
  selectPhoneTabButtonDisabled,
  selectShowEmailTab,
  selectShowNameTab,
  selectShowPhoneTab,
  selectShowSummaryTab,
  selectUserEmail,
  selectUserName,
  selectUserPhone
} from './reali-store.selectors';
import {
  ClearAllValuesAction,
  ShowEmailTabAction,
  ShowNameTabAction,
  ShowPhoneTabAction,
  ShowSummaryTabAction,
  UpdateButtonsDisableAction,
  UpdateEmailValueAction,
  UpdateNameValueAction,
  UpdatePhoneValueAction
} from './reali-store.actions';

@Injectable({
  providedIn: 'root'
})
export class RealiStoreService {

  constructor(private store: Store<RealiStoreState>) {
  }

  isNameTabShown$(): Observable<boolean> {
    return this.store.select(selectShowNameTab);
  }

  isEmailTabShown$(): Observable<boolean> {
    return this.store.select(selectShowEmailTab);
  }

  isPhoneTabShown$(): Observable<boolean> {
    return this.store.select(selectShowPhoneTab);
  }

  isSummaryTabShown$(): Observable<boolean> {
    return this.store.select(selectShowSummaryTab);
  }

  userName$(): Observable<string> {
    return this.store.select(selectUserName);
  }

  userEmail$(): Observable<string> {
    return this.store.select(selectUserEmail);
  }

  userPhone$(): Observable<string> {
    return this.store.select(selectUserPhone);
  }

  isNameTabButtonDisabled$(): Observable<boolean> {
    return this.store.select(selectNameTabButtonDisabled);
  }

  isEmailTabButtonDisabled$(): Observable<boolean> {
    return this.store.select(selectEmailTabButtonDisabled);
  }

  isPhoneTabButtonDisabled$(): Observable<boolean> {
    return this.store.select(selectPhoneTabButtonDisabled);
  }

  showNameTab() {
    this.store.dispatch(new ShowNameTabAction());
  }

  showEmailTab() {
    this.store.dispatch(new ShowEmailTabAction());
  }

  showPhoneTab() {
    this.store.dispatch(new ShowPhoneTabAction());
  }

  showSummaryTab() {
    this.store.dispatch(new ShowSummaryTabAction());
  }

  clearAllValues() {
    this.store.dispatch(new ClearAllValuesAction());
  }

  updateNameValue(userName: string) {
    this.store.dispatch(new UpdateNameValueAction(userName));
  }

  updateEmailValue(userEmail: string) {
    this.store.dispatch(new UpdateEmailValueAction(userEmail));
  }

  updatePhoneValue(userPhone: string) {
    this.store.dispatch(new UpdatePhoneValueAction(userPhone));
  }

  updateButtonsDisable(nameTabButtonDisabled: boolean, emailTabButtonDisabled: boolean, phoneTabButtonDisabled: boolean) {
    this.store.dispatch(new UpdateButtonsDisableAction({isNameTabButtonDisabled: nameTabButtonDisabled,
                                                                 isEmailTabButtonDisabled: emailTabButtonDisabled,
                                                                 isPhoneTabButtonDisabled: phoneTabButtonDisabled      }));
  }

}
