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
          <img className="h-10 w-10 rounded-full" src={image} alt="" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm md:text-base font-medium text-gray-900">{name}</p>
          <p className="truncate text-[12px] md:text-sm text-gray-500">
            {content.substring(0, 40)}
            {content.length >= 40 && "..."}
          </p>
        </div>
        <div>
          <a
            href="#"
            className="inline-flex  bg-white px-2.5 py-0.5 text-[11px] md:text-[13px] leading-5 text-gray-700"
          >
            {time}
          </a>
        </div>
      </div>
    </li>
  );
}

export default Notification;
