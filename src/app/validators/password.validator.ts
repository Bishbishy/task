import {
  FormGroup,
} from '@angular/forms';

export function paswordShouldMatch(control1: string, control2: string) {
  return (control: FormGroup): {} | null => {
    const password = control.controls[control1];
    const confirmPassword = control.controls[control2];
    if (
      password.value !== confirmPassword.value &&
      confirmPassword.valid
    ) {
      confirmPassword.setErrors({ noMatch: true });
    }
    return null;
  };
}
