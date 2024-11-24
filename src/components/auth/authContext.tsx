import axios from "axios";
import {
  ContextType,
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import { getCookie, setCookie } from "./cookies";

type useAuthType = {
  login: (user: string, password: string) => Promise<boolean>;
  accessToken: string | null;
  isLogged: boolean;
};

const authContext = createContext<useAuthType>({
  accessToken: null,
  isLogged: false,
  login(user, password) {
    return Promise.reject();
  },
});
export const useAuth = () => useContext(authContext);

export const AuthContextProvider = (props: { children: ReactElement }) => {
  const [accessToken, setAccessToken] = useState(
    getCookie("accessToken")?.value ?? null
  );
  const isLogged = Boolean(accessToken?.length);
  const login: useAuthType["login"] = async (user, password) => {
    try {
      const resAxios = await axios.post("/api/login", {
        user: user,
        password: password,
      });
      setAccessToken(resAxios.data);
      setCookie("accessToken", resAxios.data, 3600);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <authContext.Provider
      value={{
        login,
        accessToken,
        isLogged,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
