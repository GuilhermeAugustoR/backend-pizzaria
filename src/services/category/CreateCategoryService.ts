import prismaClient from "../../prisma";

interface ICategory {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: ICategory) {
    if (!name) {
      throw new Error("Nome inválido");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
