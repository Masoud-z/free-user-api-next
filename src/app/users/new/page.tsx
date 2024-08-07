"use client";
import { createUser } from "@/core/actions";
import { AppRouteKey } from "@/core/constants/routes";
import Link from "next/link";
import { useFormState } from "react-dom";

const CreateNewUser = () => {
  const [formState, action] = useFormState(createUser, { message: "" });
  return (
    <form
      action={action}
      className="card flex flex-col justify-start items-start gap-4"
    >
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input className="input" type="text" name="name" id="name" />
      </div>
      <div className="input-container">
        <label htmlFor="job">Job:</label>
        <input className="input" type="text" name="job" id="job" />
      </div>
      {formState.message && <div className="error">{formState.message}</div>}
      <div className="flex justify-start items-start gap-4">
        <Link href={AppRouteKey.home} className="btn-error">
          Cancel
        </Link>
        <button type="submit" className="btn-success">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateNewUser;
