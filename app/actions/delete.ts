"use server";
import { revalidatePath } from "next/cache";
import prisma from "../config/db";

export const deleteUser = async (id: string) => {
  await prisma.users.delete({
    where: {
      id,
    },
  });
  revalidatePath("/dashboard/users");
};
export const deleteProduct = async (id: string) => {
  await prisma.products.delete({
    where: {
      id,
    },
  });
  revalidatePath("/dashboard/products");
};
