import { ClassicSpinner } from "react-spinners-kit";

const CustomContextLoader = (): JSX.Element => {
  return (
    <div className={"h-1/2 flex justify-center items-center"}>
      <ClassicSpinner color={"#d81b60"} loading={true} size={35} />
    </div>
  );
};

export default CustomContextLoader;
