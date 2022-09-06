import React from "react";

function Input({ placeholder, className, type, ...rest }) {
  return (
    <input
      type={type ? type : "text"}
      className={`input-text ${className} px-3 py-4  text-base  text-white  w-full bg-[#141530] 
      rounded-md outline-none`}
      required
      {...rest}
      placeholder={placeholder}
    />
  );
}

export default Input;
