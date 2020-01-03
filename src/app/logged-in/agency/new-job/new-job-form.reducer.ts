import { Action, createReducer, on } from '@ngrx/store';
import { actionNewJobFormReset, actionNewJobFormUpdate } from './new-job-form.actions';
import { initialState, NewJobForm, NewJobFormState } from './new-job-form.model';

const reducer = createReducer(
  initialState,
  on(actionNewJobFormUpdate, (state, { newJobForm }) => ({ ...state, newJobForm })),
  on(actionNewJobFormReset, () => initialState)
);

export function newJobFormReducer(state: NewJobFormState | undefined, action: Action) {
  return reducer(state, action);
}
