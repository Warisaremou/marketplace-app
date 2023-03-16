import { createContext, useState, useContext } from "react";

export const UserFollowContext = createContext({
  userFollowers: [],
  userFollowings: [],
  setUserFollowers: (value: any) => {},
  setUserFollowings: (value: any) => {},
});

export const UserFollowContextProvider = ({ children }: any) => {
  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowings, setUserFollowings] = useState([]);

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
