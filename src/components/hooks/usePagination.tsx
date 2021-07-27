import { useState, useEffect } from "react";

const usePagination = (getLimit: number) => {
  const [limit, setLimit] = useState<number>(getLimit);
  const [skip, setSkip] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);

  useEffect(() => {
    setEnd(skip + limit);
  }, [limit, skip]);

  return { limit, setLimit, skip, setSkip, end, setEnd };
};

export default usePagination;
