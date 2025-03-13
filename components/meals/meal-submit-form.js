"use client";
import { useFormStatus } from "react-dom";
import classes from "./meal-submit-form.module.css";
export default function MealsSubmitForm() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
