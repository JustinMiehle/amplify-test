import { createAction, props } from '@ngrx/store';
import { NewJobForm } from './new-job-form.model';

export const actionNewJobFormUpdate = createAction('[NewJobForm] Update', props<{ newJobForm: NewJobForm }>());

export const actionNewJobFormReset = createAction('[NewJobForm] Reset');
