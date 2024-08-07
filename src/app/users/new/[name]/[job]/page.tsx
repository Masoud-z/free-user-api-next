interface Props {
  params: { name: string; job: string };
}

const page = ({ params: { name, job } }: Props) => {
  return (
    <div className="card">
      <div className="w-full flex flex-col text-white">
        <div className="w-full flex items-center justify-start gap-3">
          <div className="flex justify-start items-center gap-3 w-[50%]">
            <h2>Name:</h2>
            {name.replace("%20", " ")}
          </div>
          <div className="flex justify-start items-center gap-3 w-[50%]">
            <h2>Job: </h2>
            {job.replace("%20", " ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
