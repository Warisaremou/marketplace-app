import Notification from "../components/Notification";

const notification = [
  {
    name: "Leonard Krasner",
    content: "a commenté(e) votre produit zdlsvjvbfdjvlvk bhdfbvjofdvnjfdviefduvkdbvh",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    time: "il y a 6 jours",
  },
  {
    name: "Floyd Miles",
    content: "à publié(e) un nouveau produit",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    time: "il y a 7 minutes",
  },
  {
    name: "Emily Selman",
    content: "a commencé(e) à vous suivre",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    time: "il y a 1 semaines",
  },
  {
    name: "Kristin Watson",
    content: "a passé une commande",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    time: "il y a 20 secondes",
  },
];

function Notifications() {
  return (
    <div className="px-4">
      <h1 className="text-sm font-medium text-blue-color">
        Notifications <span className="font-semibold pl-1">{notification.length}</span>
      </h1>
      <ul role="list" className="divide-y divide-gray-200">
        {notification.map((notif, index) => (
          <Notification
            key={index}
            name={notif.name}
            content={notif.content}
            image={notif.imageUrl}
            time={notif.time}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
