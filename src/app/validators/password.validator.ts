import {
  FormGroup,
} from '@angular/forms';

export function paswordShouldMatch(control1: string, control2: string) {
  return (control: FormGroup): {} | null => {
    const newpassword = control.controls[control1];
    const confirmnewpassword = control.controls[control2];
    if (
      newpassword.value !== confirmnewpassword.value &&
      confirmnewpassword.valid
    ) {
      confirmnewpassword.setErrors({ noMatch: true });
    }
    return null;
  };
}
