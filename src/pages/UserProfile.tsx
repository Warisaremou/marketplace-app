// import { Button, FileInput } from "flowbite-react";
import { useState } from "react";
// import UserInfo from "../components/UserInfo";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { UserLogged } from "./../context/UserLoggedContext";
import UserDefaultProfile from "../utils/UserDefaultProfile";

function UserProfile() {
  const [open, setOpen] = useState(false);
  const { meData } = UserLogged();
  const [profilePic, setProfilePic] = useState("");
  const { removeFromLocalStorage } = useLocalStorage();
  const userId = meData.id;

  const disconnectMe = () => {
    removeFromLocalStorage("accessToken");
    window.location.reload();
  };

  // const onFileChange = (fileChangeEvent: any) => {
  //   const file = fileChangeEvent.target.files[0];
  //   let formData = new FormData();
  //   formData.append("file", file, file.name);
  //   console.log(formData.get("file"));

  //   userProfile(formData)
  //     .then((res) => {
  //       // console.log(res.data);
  //       const userPictureId: any = res.data.id;
  //       updateUserProfilePicture({ userId, userPictureId });
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="pt-5 items-center">
      <div className="grid justify-center md:grid-cols-3">
        <div className="relative">
          <div className="profile-bg-cover relatice">
            {meData.photo == null ? (
              <UserDefaultProfile />
            ) : (
              <img
                src={meData.photo.path}
                alt=""
                className="w-full h-full object-cover outline-none mx-auto relative"
              />
            )}
          </div>
          {meData.status?.id === 1 && <span className="active"></span>}
        </div>
        <div className="md:col-span-2 p-2">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <h1 className="font-medium text-xl text-gray-600">{meData.username}</h1>
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="text-sm bg-gray-300 p-2 rounded-md cursor-pointer"
            >
              Modifier votre profile
            </button>
          </div>
          {/* <UserInfo open={open} setOpen={setOpen} meData={meData} /> */}
          <button
            type="button"
            onClick={() => disconnectMe()}
            className="flex justify-center mt-2 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-md text-xs"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
