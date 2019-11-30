import { Action } from '@ngrx/store';

export enum RealiStoreActionTypes {
  ShowNameTab = '[Reali Store] Show Name Tab',
  ShowEmailTab = '[Reali Store] Show Email Tab',
  ShowPhoneTab = '[Reali Store] Show Phone Tab',
  ShowSummaryTab = '[Reali Store] Show Summary Tab',
  UpdateNameValue = '[Reali Store] Update Name Values',
  UpdateEmailValue = '[Reali Store] Update Email Value',
  UpdatePhoneValue = '[Reali Store] Update Phone Value',
  ClearAllValues = '[Reali Store] Clear All Values',
  UpdateButtonsDisable = '[Reali Store] UpdateButtons Disable',
}

export class ShowNameTabAction implements Action {
  readonly type = RealiStoreActionTypes.ShowNameTab;
  constructor() {}
}

export class ShowEmailTabAction implements Action {
  readonly type = RealiStoreActionTypes.ShowEmailTab;
  constructor() {}
}

export class ShowPhoneTabAction implements Action {
  readonly type = RealiStoreActionTypes.ShowPhoneTab;
  constructor() {}
}

export class ShowSummaryTabAction implements Action {
  readonly type = RealiStoreActionTypes.ShowSummaryTab;
  constructor() {}
}

export class UpdateNameValueAction implements Action {
  readonly type = RealiStoreActionTypes.UpdateNameValue;
  constructor(public payload: string) {}
}

export class UpdateEmailValueAction implements Action {
  readonly type = RealiStoreActionTypes.UpdateEmailValue;
  constructor(public payload: string) {}
}

export class UpdatePhoneValueAction implements Action {
  readonly type = RealiStoreActionTypes.UpdatePhoneValue;
  constructor(public payload: string) {}
}

export class ClearAllValuesAction implements Action {
  readonly type = RealiStoreActionTypes.ClearAllValues;
  constructor() {}
}

export class UpdateButtonsDisableAction implements Action {
  readonly type = RealiStoreActionTypes.UpdateButtonsDisable;
  constructor(public payload: {isNameTabButtonDisabled: boolean, isEmailTabButtonDisabled: boolean, isPhoneTabButtonDisabled: boolean}) {}
}

export type RealiStoreActions =
  ShowNameTabAction |
  ShowEmailTabAction |
  ShowPhoneTabAction |
  ShowSummaryTabAction |
  UpdateNameValueAction |
  UpdateEmailValueAction |
  UpdatePhoneValueAction |
  ClearAllValuesAction |
  UpdateButtonsDisableAction;
