import { AppRouteKey } from "@/core/constants/routes";
import { UserDto } from "@/core/dtos/users/users.dto";
import {
  deleteUserApi,
  getUserApi,
  getUsersListApi,
} from "@/core/services/users/methods";
import { errorMessageHandler, idConverter } from "@/core/utilities";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const ShowUserPage = async ({ params: { id } }: Props) => {
  let user: UserDto | undefined;
  await getUserApi({ id: idConverter(id) })
    .then((res) => {
      user = res.data;
    })
    .catch(errorMessageHandler);

  async function deleteUserAction() {
    "use server";
    await deleteUserApi({ id: +id });
  }

  return user ? (
    <div className="card">
      <div className="flex items-center justify-end gap-6 mb-4">
        <Link href={AppRouteKey.users.edit(user.id)} className="btn-success">
          Edit
        </Link>
        <form action={deleteUserAction}>
          <button type="submit" className="btn-error">
            Delete
          </button>
        </form>
      </div>
      <div className="flex gap-7 max-md:flex-col">
        <div className="w-96 h-96 relative">
          <Image
            src={user.avatar}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={user.first_name}
            className="rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col text-white">
          <div className="w-full flex items-center justify-start gap-3">
            <div className="flex justify-start items-center gap-3 w-[50%]">
              <h2>First Name:</h2>
              {user.first_name}
            </div>
            <div className="flex justify-start items-center gap-3 w-[50%]">
              <h2>Last Name: </h2>
              {user.last_name}
            </div>
          </div>
          <div className="w-full flex items-center justify-start gap-3">
            <div className="flex justify-start items-center gap-3 w-[50%]">
              <h2>Email:</h2>
              {user.email}
            </div>
            <div className="flex justify-start items-center gap-3 w-[50%]">
              <h2>ID:</h2>
              {user.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ShowUserPage;

export async function getStaticParams() {
  const users = await getUsersListApi();
  return users.data.map((user) => ({ id: user.id.toString() }));
}
