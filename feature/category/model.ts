import { prisma } from "../../lib/db";

export const getCategories = async (userId: string) => {
  const categories = await prisma.category.findMany({
    where: {
      userId,
    },
  });

  return categories;
};
