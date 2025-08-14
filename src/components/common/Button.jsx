import React from "react";

function Button({ title }) {
  return (
    <div>
      <button className="ring px-4 py-0.5 md:px-6 md:py-1  text-gray-200 rounded-3xl hover:bg-gray-100 font-semibold hover:text-black cursor-pointer">
        {title}
      </button>
    </div>
  );
}

export default Button;
