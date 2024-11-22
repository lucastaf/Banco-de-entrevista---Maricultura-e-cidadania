import { ContextType, createContext, ReactElement, useState } from "react";

type useAuthType = {
  login: (email: string, password: string) => Promise<boolean>;
  accessToken: string | null;
  isLogged: boolean;
};

const authContext = createContext<useAuthType>({
  accessToken: null,
  isLogged: false,
  login(email, password) {
    return Promise.reject();
  },
});

const AuthContextProvider = (props: { children: ReactElement }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const isLogged = false;
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
