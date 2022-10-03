import React from "react";

const Checkbox = ({
  checked = false,
  onclick = () => {},
  name = "",
  children,
  error,
}) => {
  return (
    <div className="flex items-center gap-x-5">
      <div
        className={`inline-flex items-center justify-center p-1 w-5 h-5 border rounded ${
          checked
            ? "bg-primary border-primary"
            : "border-strock dark:border-text-3"
        }`}
        onClick={onclick}>
        <input
          type="checkbox"
          className="hidden"
          onChange={() => {}}
          a
          name={name}
        />
        {checked && (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white">
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Checkbox;
