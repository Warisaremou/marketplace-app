import { createContext, useEffect, useState, useContext } from "react";
import { connectMe } from "../services/authentication/me";
import { userType } from "../types/entities";
import { useLocalStorage } from "./../hooks/useLocalStorage";

export const UserLoggedContext = createContext({
  meData: {} as userType,
  setMeData: (value: userType) => {},
  registerMail: "",
  setRegisterMail: (value: string) => {},
  connectUser: () => {},
});

export const UserLoggedContextProvider = ({ children }: any) => {
  const [meData, setMeData] = useState<userType>({} as userType);
  const [registerMail, setRegisterMail] = useState("");
  const { removeFromLocalStorage } = useLocalStorage();

  useEffect(() => {
    connectUser();
  }, []);
  async function connectUser() {
    await connectMe()
      .then((res) => {
        // console.log(res.data);
        setMeData(res.data);
      })
      .catch((error) => {
        // console.log(error);
        // removeFromLocalStorage("accessToken");
      });
  }

  //   console.log(meData);

  return (
    <UserLoggedContext.Provider
      value={{ meData, setMeData, connectUser, registerMail, setRegisterMail }}
    >
      {children}
    </UserLoggedContext.Provider>
  );
};

export const UserLogged = () => {
  return useContext(UserLoggedContext);
};
