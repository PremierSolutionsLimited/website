import { ClassicSpinner } from "react-spinners-kit";

const ContextLoader = (): JSX.Element => {
  return (
    <div className={"w-screen h-screen flex justify-center items-center"}>
      <ClassicSpinner color={"#CC8A00"} loading={true} size={35} />
    </div>
  );
};

export default ContextLoader;
