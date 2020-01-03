export interface FindStaffForm {
  genders: string[];
  ageRanges: string[];
}

export interface FindStaffFormState {
  FindStaffForm: FindStaffForm;
}

export const initialState: FindStaffFormState = {
  FindStaffForm: {} as FindStaffForm
};
