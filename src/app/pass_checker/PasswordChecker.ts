export enum PasswordErrors {
  SHORT = 'Password is too short',
  NO_UPPER_CASE = 'Upper case letter is required',
  NO_LOWER_CASE = 'Lower case letter is required',
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
    if (password === password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
    if (password === password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }
    return { valid: reasons.length <= 0, reasons };
  }
}

export default PasswordChecker;
