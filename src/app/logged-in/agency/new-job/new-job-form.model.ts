export interface NewJobForm {
  autosave: boolean;
  username: string;
  password: string;
  email: string;
  description: string;
  requestGift: boolean;
  birthday: Date;
  rating: number;
}

export interface NewJobFormState {
  newJobForm: NewJobForm;
}

export const initialState: NewJobFormState = {
  newJobForm: {} as NewJobForm
};
