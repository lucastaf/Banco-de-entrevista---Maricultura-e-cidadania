import { Card, CardContent, CardHeader } from "../ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { Loader2, User } from "lucide-react";
import { useAuth } from "./authContext";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function LoginCard() {
  const [loadingButton, setLoadingButton] = useState(false);
  const auth = useAuth();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    const user: string = e.target[0].value;
    //@ts-ignore
    const password: string = e.target[1].value;
    setLoadingButton(true);
    const loginPromise = new Promise((resolve, reject) => {
      auth.login(user, password).then((res) => {
        setLoadingButton(false);
        if (res) {
          resolve(true);
        } else {
          reject();
        }
      });
    });
    toast.promise(loginPromise, {
      error: "Erro ao realizar o login",
      loading: "Realizando login",
      success: "Login realizado com sucesso",
    });
  };

  return (
    <div className="flex justify-center">
      <Card className="max-w-[500px] flex-1">
        <CardHeader>Login de administrador</CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-5">
              <div className="flex justify-center">
                <div className="bg-slate-300 p-2 rounded-full">
                  <User size={40} />
                </div>
              </div>
              <div>
                <Label>Email</Label>
                <Input placeholder="email@univalli.com" />
              </div>
              <div>
                <Label>Senha</Label>
                <Input type="password" placeholder="*****" />
              </div>
              <Button disabled={loadingButton} type="submit" className="mt-8">
                {loadingButton && <Loader2 className="animate-spin" />}
                LOGIN
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
