import {
  GetListUsersRequest,
  GetListUsersResponse,
  GetUserRequest,
  GetUserResponse,
} from "@/core/dtos/users/users.dto";
import getUserUrl from "./urls";
import { revalidatePath } from "next/cache";
import { AppRouteKey } from "@/core/constants/routes";
import { redirect } from "next/navigation";

export function getUsersListApi(
  props?: GetListUsersRequest
): Promise<GetListUsersResponse> {
  return fetch(getUserUrl("users", props), {
    method: "GET",
  }).then((res) => res.json());
}

export function getUserApi(props: GetUserRequest): Promise<GetUserResponse> {
  return fetch(getUserUrl(`users/${props.id}`), {
    method: "GET",
  }).then((res) => res.json());
}

export function deleteUserApi(props: GetUserRequest): Promise<GetUserResponse> {
  return fetch(getUserUrl(`users/${props.id}`), {
    method: "DELETE",
  }).then((res) => {
    console.log(res);
    revalidatePath(AppRouteKey.home);
    redirect(AppRouteKey.home);
  });
}
