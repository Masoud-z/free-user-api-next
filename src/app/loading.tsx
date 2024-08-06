import { LoadingIcon } from "@/core/icons";

const Loading = () => {
  return (
    <div className="h-dvh flex justify-center items-center">
      <LoadingIcon className="animate-spin" />
    </div>
  );
};

export default Loading;
