import React from "react";

type notificationProps = {
  image: string;
  name: string;
  content: string;
  time: string;
};

function Notification({ image, name, content, time }: notificationProps) {
  return (
    <li className="py-4">
      <div className="flex items-center space-x-2">
        <div className="flex-shrink-0">
          <img className="h-8 w-8 rounded-full" src={image} alt="" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-gray-900">{name}</p>
          <p className="truncate text-[10px] text-gray-500">{content}</p>
        </div>
        <div>
          <a
            href="#"
            className="inline-flex  bg-white px-2.5 py-0.5 text-[10px] leading-5 text-gray-700"
          >
            {time}
          </a>
        </div>
      </div>
    </li>
  );
}

export default Notification;
