import { writeFile, stat, readFile } from "fs/promises";
import { join } from "path";

export const setAcessToken = async (newToken: string) => {
  const path = join(process.cwd(), "public", "acessToken.json");
  await writeFile(path, JSON.stringify(newToken));
};

export const getAcessToken = async () => {
  const path = join(process.cwd(), "public", "acessToken.json");
  const stats = await stat(path);
  const fileData = JSON.parse((await readFile(path)).toString());
  const expirationTime = stats.mtime;
  expirationTime.setHours(expirationTime.getHours() + 1);
  const isTokenAvaible = expirationTime.getTime() >= Date.now();

  if (!isTokenAvaible || !fileData) {
    //Token expirado
    await writeFile(path, JSON.stringify(""));
    return null;
  }
  return fileData
};
