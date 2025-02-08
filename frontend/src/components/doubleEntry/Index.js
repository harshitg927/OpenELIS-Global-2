import { React, useRef, useState } from "react";
import DoubleEntrySearch from "./DoubleEntrySearch";

export { default as DoubleEntrySearch } from "./DoubleEntrySearch";

const DoubleEntryPage = () => {
  const doubleEntryRef = useRef(null);
  const [doubleEntry, setDoubleEntry] = useState([]);

  return (
    <>
      <DoubleEntrySearch />
    </>
  );
};

export default DoubleEntryPage;
