import { defaultAvatarImg } from "constants/global";
import React from "react";

const CampAuthor = ({ img = defaultAvatarImg, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img src={img} alt="" className="object-cover w-8 h-8 rounded-full" />
      <p className="text-xs text-text-3">
        By <span className="font-semibold text-text-2">{author} </span>
      </p>
    </div>
  );
};

export default CampAuthor;
