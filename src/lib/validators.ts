export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type FormErrors<T> = Partial<Record<keyof T, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export function validateLogin(values: LoginValues): FormErrors<LoginValues> {
  const errors: FormErrors<LoginValues> = {};

  if (!values.email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Ingresá un email válido";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  }

  return errors;
}

export function validateRegister(values: RegisterValues): FormErrors<RegisterValues> {
  const errors: FormErrors<RegisterValues> = {};

  if (!values.name.trim()) {
    errors.name = "El nombre es obligatorio";
  } else if (values.name.trim().length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres";
  }

  if (!values.email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Ingresá un email válido";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (!PASSWORD_REGEX.test(values.password)) {
    errors.password = "Mínimo 8 caracteres, con mayúscula, minúscula y número";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirmá tu contraseña";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
}
