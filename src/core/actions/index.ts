"use server";
import { redirect } from "next/navigation";
import { AppRouteKey } from "../constants/routes";
import { createUserApi } from "../services/users/methods";

export async function createUser(
  formState: { message: string },
  formDate: FormData
) {
  const name = formDate.get("name");
  const job = formDate.get("job");
  try {
    if (typeof name !== "string" || name.length < 3) {
      return { message: "Name should be longer than 3 character!" };
    }
    if (typeof job !== "string" || job.length < 3) {
      return { message: "Job should be longer than 3 character!" };
    }
    await createUserApi({ name, job });
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: "Something went wrong!" };
  }
  redirect(AppRouteKey.users.created(name, job));
}
