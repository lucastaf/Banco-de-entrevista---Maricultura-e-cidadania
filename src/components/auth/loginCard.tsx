import { Card, CardContent, CardHeader } from "../ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { User } from "lucide-react";

export default function LoginCard() {
  return (
    <div className="flex justify-center">
      <Card className="max-w-[500px] flex-1">
        <CardHeader>Login de administrador</CardHeader>
        <CardContent>
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
            <Button className="mt-8">LOGIN</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
