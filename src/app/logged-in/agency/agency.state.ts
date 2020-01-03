import { ActionReducerMap } from '@ngrx/store';
import { NewJobFormState } from './new-job/new-job-form.model';
import { newJobFormReducer } from './new-job/new-job-form.reducer';

export const agencyReducers: ActionReducerMap<AgencyState> = {
  newJobForm: newJobFormReducer
};

export interface AgencyState {
  newJobForm: NewJobFormState;
}

export interface State {
  agency: AgencyState;
}
