import React from "react";
import UserDefaultProfile from "./UserDefaultProfile";
type AvatarProps = {
  src?: string;
};

function Avatar({ src }: AvatarProps) {
  return (
    <div className="w-8 h-8 overflow-hidden rounded-full">
      {src ? <img src={src} /> : <UserDefaultProfile />}
    </div>
  );
}

export default Avatar;
