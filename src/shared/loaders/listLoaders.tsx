import { Fragment } from "react";
import { ClassicSpinner } from "react-spinners-kit";

const ListLoader = () => {
  return (
    <Fragment>
      <ClassicSpinner color={"#d81b60"} size={15} loading={true} />
    </Fragment>
  );
};

export default ListLoader;
