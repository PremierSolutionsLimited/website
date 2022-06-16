import { ClassicSpinner } from "react-spinners-kit";

const CustomContextLoader = (): JSX.Element => {
  return (
    <div className={"h-1/2 flex justify-center items-center"}>
      <ClassicSpinner color={"#CC8A00"} loading={true} size={35} />
    </div>
  );
};

export default CustomContextLoader;
