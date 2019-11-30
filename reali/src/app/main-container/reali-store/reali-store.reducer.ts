import {realiStoreState, RealiStoreState} from './reali-store.state';
import { RealiStoreActions, RealiStoreActionTypes } from './reali-store.actions';

export function realiStoreReducer(state: RealiStoreState = realiStoreState, action: RealiStoreActions): RealiStoreState {
  switch (action.type) {
    case RealiStoreActionTypes.ShowNameTab:
      return {
        ...state, isNameTabShown: true, isEmailTabShown: false, isPhoneTabShown: false, isSummaryTabShown: false,
      };

    case RealiStoreActionTypes.ShowEmailTab:
      return {
        ...state, isNameTabShown: false, isEmailTabShown: true, isPhoneTabShown: false, isSummaryTabShown: false,
      };

    case RealiStoreActionTypes.ShowPhoneTab:
      return {
        ...state, isNameTabShown: false, isEmailTabShown: false, isPhoneTabShown: true, isSummaryTabShown: false,
      };

    case RealiStoreActionTypes.ShowSummaryTab:
      return {
        ...state, isNameTabShown: false, isEmailTabShown: false, isPhoneTabShown: false, isSummaryTabShown: true,
      };

    case RealiStoreActionTypes.ClearAllValues:
      console.log('clear');
      return {
        ...state, userName: '', userPhone: '', userEmail: '',
      };

    case RealiStoreActionTypes.UpdateNameValue:
      console.log('update name');
      return {
        ...state, userName: action.payload,
      };

    case RealiStoreActionTypes.UpdateEmailValue:
      console.log('update email');
      return {
        ...state, userEmail: action.payload,
      };

    case RealiStoreActionTypes.UpdatePhoneValue:
      console.log('update phone');
      return {
        ...state, userPhone: action.payload,
      };

    case RealiStoreActionTypes.UpdateButtonsDisable:
      return {
        ...state, isNameTabButtonDisabled: action.payload.isNameTabButtonDisabled,
                  isEmailTabButtonDisabled: action.payload.isEmailTabButtonDisabled,
                  isPhoneTabButtonDisabled: action.payload.isPhoneTabButtonDisabled
      };

    default:
      return state;
  }
}
