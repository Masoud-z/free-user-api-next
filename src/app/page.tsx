import { AppRouteKey } from "@/core/constants/routes";
import { UserDto } from "@/core/dtos/users/users.dto";
import { getUsersListApi } from "@/core/services/users/methods";
import { errorMessageHandler } from "@/core/utilities";
import Link from "next/link";

export default async function Home() {
  let users: UserDto[] = [];

  await getUsersListApi()
    .then((res) => {
      users = res.data;
    })
    .catch(errorMessageHandler);

  return (
    <div>
      <div className="flex flex-col gap-2 justify-start items-start">
        {users.map((user) => (
          <Link
            href={AppRouteKey.users.user(user.id)}
            key={user.id}
            className="w-full flex p-3 items-center gap-4 justify-between border border-solid rounded-lg transition-custom hover:bg-slate-200 no-underline text-black"
          >
            <div className="flex justify-center items-center gap-2">
              <span className="rounded-full h-6 w-6 bg-violet-500 text-white flex justify-center items-center">
                {user.id}
              </span>
              <h1>
                {user.first_name} {user.last_name}
              </h1>
            </div>
            <div>{user.email}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
