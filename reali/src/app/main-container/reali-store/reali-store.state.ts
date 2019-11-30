export interface RealiStoreState {
  isNameTabShown: boolean;
  isEmailTabShown: boolean;
  isPhoneTabShown: boolean;
  isSummaryTabShown: boolean;
  userName: string;
  userEmail: string;
  userPhone: string;
  isNameTabButtonDisabled: boolean;
  isEmailTabButtonDisabled: boolean;
  isPhoneTabButtonDisabled: boolean;
}

export const realiStoreState: RealiStoreState = {
  isNameTabShown: true,
  isEmailTabShown: false,
  isPhoneTabShown: false,
  isSummaryTabShown: false,
  userName: '',
  userEmail: '',
  userPhone: '',
  isNameTabButtonDisabled: false,
  isEmailTabButtonDisabled: true,
  isPhoneTabButtonDisabled: true,
};
