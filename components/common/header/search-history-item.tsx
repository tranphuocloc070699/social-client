import React from "react";

type Props = {
  title: string;
};

const SearchHistoryItem = ({ title }: Props) => {
  return (
    <div
      component-name="SearchHistoryItem"
      className={"rounded-lg bg-sh-secondary-300 px-4 py-2 text-sh-text"}
    >
      {title}
    </div>
  );
};

export default SearchHistoryItem;
