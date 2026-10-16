"use client";

import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import Link from "next/link";
import FormField from "./FormField";
import { RegisterValues, validateRegister } from "@/lib/validators";
import styles from "./auth.module.css";

const initialValues: RegisterValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [values, setValues] = useState<RegisterValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof RegisterValues, boolean>>>({});

  const errors = validateRegister(values);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, confirmPassword: true });
    if (Object.keys(errors).length > 0) return;
    console.log("Submit exitoso");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h1>Crear cuenta</h1>
      <FormField
        id="name"
        label="Nombre"
        autoComplete="name"
        value={values.name}
        error={touched.name ? errors.name : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        value={values.email}
        error={touched.email ? errors.email : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormField
        id="password"
        label="Contraseña"
        type="password"
        autoComplete="new-password"
        value={values.password}
        error={touched.password ? errors.password : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormField
        id="confirmPassword"
        label="Confirmar contraseña"
        type="password"
        autoComplete="new-password"
        value={values.confirmPassword}
        error={touched.confirmPassword ? errors.confirmPassword : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Crear cuenta</button>
      <p className={styles.alt}>
        ¿Ya tenés cuenta? <Link href="/login">Iniciá sesión</Link>
      </p>
    </form>
  );
}
