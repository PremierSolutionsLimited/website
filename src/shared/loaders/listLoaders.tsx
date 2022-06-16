import { Fragment } from "react";
import { ClassicSpinner } from "react-spinners-kit";

const ListLoader = () => {
  return (
    <Fragment>
      <ClassicSpinner color={"#CC8A00"} size={15} loading={true} />
    </Fragment>
  );
};

export default ListLoader;
