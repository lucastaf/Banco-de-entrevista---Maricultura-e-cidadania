import {
  ContextType,
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";

type useAuthType = {
  login: (email: string, password: string) => Promise<boolean>;
  accessToken: string | null;
  isLogged: boolean;
};

const authContext = createContext<useAuthType>({
  accessToken: null,
  isLogged: true,
  login(email, password) {
    return Promise.reject();
  },
});
export const useAuth = () => useContext(authContext);

export const AuthContextProvider = (props: { children: ReactElement }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const isLogged = true;
  const login: useAuthType["login"] = async (email, password) => {
    return false;
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
