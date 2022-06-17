import { Fragment } from "react";
import { RingSpinner } from "react-spinners-kit";

const DataLoader = () => {
  return (
    <Fragment>
      <RingSpinner color={"#CC8A00"} size={40} loading={true} />
    </Fragment>
  );
};

export default DataLoader;
