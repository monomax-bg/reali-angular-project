import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RealiStoreState } from './reali-store.state';

export const realiStoreState = createFeatureSelector<RealiStoreState>('reali-store');

export const selectShowNameTab = createSelector(realiStoreState, (state: RealiStoreState) => state.isNameTabShown);
export const selectShowEmailTab = createSelector(realiStoreState, (state: RealiStoreState) => state.isEmailTabShown);
export const selectShowPhoneTab = createSelector(realiStoreState, (state: RealiStoreState) => state.isPhoneTabShown);
export const selectShowSummaryTab = createSelector(realiStoreState, (state: RealiStoreState) => state.isSummaryTabShown);

export const selectUserName = createSelector(realiStoreState, (state: RealiStoreState) => state.userName);
export const selectUserEmail = createSelector(realiStoreState, (state: RealiStoreState) => state.userEmail);
export const selectUserPhone = createSelector(realiStoreState, (state: RealiStoreState) => state.userPhone);

export const selectNameTabButtonDisabled = createSelector(realiStoreState, (state: RealiStoreState) => state.isNameTabButtonDisabled);
export const selectEmailTabButtonDisabled = createSelector(realiStoreState, (state: RealiStoreState) => state.isEmailTabButtonDisabled);
export const selectPhoneTabButtonDisabled = createSelector(realiStoreState, (state: RealiStoreState) => state.isPhoneTabButtonDisabled);
