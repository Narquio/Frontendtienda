"use client";

import { ChangeEvent, FocusEvent, SyntheticEvent, useState } from "react";
import Link from "next/link";
import FormField from "./FormField";
import { LoginValues, validateLogin } from "@/lib/validators";

const initialValues: LoginValues = { email: "", password: "" };

export default function LoginForm() {
  const [values, setValues] = useState<LoginValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof LoginValues, boolean>>>({});

  const errors = validateLogin(values);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (Object.keys(errors).length > 0) return;
    console.log("Submit exitoso");
  };

  return (
    <form className="mx-auto my-16 flex w-full max-w-sm flex-col gap-4 rounded-lg border border-gray-300 p-8" onSubmit={handleSubmit} noValidate>
      <h1 className="mb-2 text-2xl font-semibold">Iniciar sesión</h1>
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
        autoComplete="current-password"
        value={values.password}
        error={touched.password ? errors.password : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="submit"
        className="rounded-md bg-blue-700 py-2.5 text-base font-semibold text-white hover:bg-blue-800"
      >Iniciar sesión</button>
      <p className="text-center text-sm">
        ¿No tenés cuenta? <Link href="/register" className="text-blue-700 underline">Registrate</Link>
      </p>
    </form>
  );
}