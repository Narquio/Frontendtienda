"use client";

import { ChangeEvent, FocusEvent } from "react";
import styles from "./auth.module.css";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  autoComplete?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

export default function FormField({
  id,
  label,
  type = "text",
  value,
  error,
  autoComplete,
  onChange,
  onBlur,
}: FormFieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={error ? styles.inputError : undefined}
      />
      {error && (
        <span id={`${id}-error`} role="alert" className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}
