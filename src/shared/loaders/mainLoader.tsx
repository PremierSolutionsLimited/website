import { ClassicSpinner } from "react-spinners-kit";

const ContextLoader = (): JSX.Element => {
  return (
    <div className={"w-screen h-screen flex justify-center items-center"}>
      <ClassicSpinner color={"#d81b60"} loading={true} size={60} />
    </div>
  );
};

export default ContextLoader;
