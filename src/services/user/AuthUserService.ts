import { compare } from "bcryptjs";
import prismaClient from "../../prisma";

interface IAuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: IAuthRequest) {
    //Verifica se esse email já está cadastrado
    const user = await prismaClient.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      throw new Error("Usuario  ou senha incorretos");
    }

    //verificado se a senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Usuario  ou senha incorretos");
    }

    return { ok: true };
  }
}

export { AuthUserService };
