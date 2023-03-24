import { createContext, useState, useContext, useEffect } from "react";
import { getFollowers } from "../services/Follows/getFollowers";
import { getFollowings } from "../services/Follows/getFollowings";
import { UserLogged } from "./UserLoggedContext";

export const UserFollowContext = createContext({
  userFollowers: [],
  userFollowings: [],
  setUserFollowers: (value: any) => {},
  setUserFollowings: (value: any) => {},
});

export const UserFollowContextProvider = ({ children }: any) => {
  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowings, setUserFollowings] = useState([]);
  const { meData } = UserLogged();

  // useEffect(() => {
  //   getFollowers(meData?.id)
  //     .then((res) => {
  //       // console.log(res.data);
  //       setUserFollowers(res.data);
  //     })
  //     .catch((err) => console.log(err));
  //   getFollowings(meData?.id)
  //     .then((res) => {
  //       // console.log(res.data);
  //       setUserFollowings(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <UserFollowContext.Provider
      value={{ userFollowers, userFollowings, setUserFollowers, setUserFollowings }}
    >
      {children}
    </UserFollowContext.Provider>
  );
};

export const FollowsData = () => {
  return useContext(UserFollowContext);
};
