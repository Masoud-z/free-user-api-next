"use client";

import { AppRouteKey } from "@/core/constants/routes";
import Link from "next/link";

interface Props {
  error: Error;
}

const error = ({ error }: Props) => {
  return (
    <div className="h-dvh flex justify-center items-center">
      <div className="card flex gap-4 flex-col justify-center items-center">
        <h1 className="text-white">{error.message}</h1>
        <Link href={AppRouteKey.home} className="btn-success">
          Home
        </Link>
      </div>
    </div>
  );
};

export default error;
