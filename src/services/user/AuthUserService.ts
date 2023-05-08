import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

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

    //Se tudo deu certo, é hora de gerar o token

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { subject: user.id, expiresIn: "30d" }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
