import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionNewJobFormReset, actionNewJobFormUpdate } from './new-job-form.actions';
import { NewJobForm, NewJobFormState } from './new-job-form.model';

@Injectable()
export class NewJobFormFacade {
  form$ = this.store.select(state => state.newJobForm);

  constructor(private store: Store<NewJobFormState>) {}

  updateNewJobForm(newJobForm: NewJobForm) {
    this.store.dispatch(actionNewJobFormUpdate({ newJobForm }));
  }

  resetNewJobForm() {
    this.store.dispatch(actionNewJobFormReset());
  }
}
