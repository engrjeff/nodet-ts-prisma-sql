import { prisma } from "../../lib/db";
import { UserCreateDto, UserUpdateDto } from "./schema";

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users.map(({ password, ...rest }) => rest);
};

export const getUserById = async (id: string) => {
  const foundUser = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      categories: {
        include: {
          products: true,
        },
      },
    },
  });

  return foundUser;
};

export const createUser = async (data: UserCreateDto) => {
  const newUser = await prisma.user.create({
    data,
  });

  const { password, ...user } = newUser;

  return user;
};

export const updateUser = async (id: string, data: UserUpdateDto) => {
  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data,
  });

  const { password, ...user } = updatedUser;

  return user;
};

export const deleteUser = async (id: string) => {
  await prisma.user.delete({
    where: { id },
  });
};
