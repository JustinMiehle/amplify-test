import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { actionNewJobFormUpdate } from './new-job-form.actions';

export const FORM_KEY = 'NEWJOB.FORM';

@Injectable()
export class FormEffects {
  persistForm = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionNewJobFormUpdate),
        tap(action => console.log('EFFECT of FORM UPDATE', action))
        // tap(action => this.localStorageService.setItem(FORM_KEY, { newJobForm: action.newJobForm }))
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions) { }
}
