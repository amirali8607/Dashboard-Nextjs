"use server";

import { UserRole } from "@prisma/client";
import prisma from "../config/db";
import { join } from "path";
import { writeFile } from "fs/promises";

export const updateProduct = async (id: string, data: FormData) => {
  await prisma.products.update({
    where: {
      id,
    },
    data: {
      description: data.get("desc") as string,
      price: (data.get("price") as string) + "$",
    },
  });
};

export const updateUser = async (id: string, data: FormData) => {
  let color = "";
  if (data.get("isActive") == "canceled") color = "Red";
  else if (data.get("isActive") == "pending") color = "yellow";
  else color = "gray";
  const file: File | null = data.get("file") as unknown as File;
  if (!file) {
    throw new Error("no file uploaded");
  }
  const byte = await file.arrayBuffer();
  const buffer = Buffer.from(byte);
  const path = join(".", "public/", file.name);
  await writeFile(path, buffer).then(async () => {
    await prisma.users.update({
      where: {
        id,
      },
      data: {
        username: data.get("username") as string,
        email: data.get("email") as string,
        password: data.get("password") as string,
        address: data.get("address") as string,
        phonenumber: data.get("phone") as string,
        isAdmin: data.get("isAdmin") as UserRole,
        status: data.get("isActive") as string,
        img: path.replace("public", "").replace(/\\/g, "/"),
        color,
      },
    });
  });
};
