import React from "react";

const SearchInputs = () => {
  return (
    <>
      <input
        className="w-full border border-[#383838] bg-[#111736] outline-none h-[46px] rounded-md px-2"
        type="text"
        placeholder="@username......"
      />
      <button className="bg-[#6e62e5]  outline-none h-[46px] rounded-md border-none text-center w-full">Add Influenser</button>
    </>
  );
};

export default SearchInputs;
