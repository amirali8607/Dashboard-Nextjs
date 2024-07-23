"use server";

import prisma from "../config/db";
import { UserRole } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import { join } from "path";

export const createProduct = async (data: FormData) => {
  const date = new Date();
  await prisma.products.create({
    data: {
      description: data.get("desc") as string,
      price: data.get("price") as string,
      stock: parseInt(data.get("stock") as string),
      title: data.get("title") as string,
      createdAt: date.getFullYear().toString(),
    },
  });
};

export const createUser = async (formdata: FormData) => {
  let color = "";
  let date = new Date();
  if (formdata.get("isActive") === "done") color = "gray";
  else if (formdata.get("isActive") === "canceled") color = "red";
  else color = "yellow";
  const file: File | null = formdata.get("file") as unknown as File;
  if (!file) {
    throw new Error("no file uploaded");
  }
  const byte = await file.arrayBuffer();
  const buffer = Buffer.from(byte);
  const path = join(".", "public/image", file.name);
  await writeFile(path, buffer).then(async () => {
    await prisma.users.create({
      data: {
        email: formdata.get("email") as string,
        password: formdata.get("passowrd") as string,
        username: formdata.get("username") as string,
        address: formdata.get("address") as string,
        phonenumber: formdata.get("phone") as string,
        status: formdata.get("isActive") as string,
        isAdmin: formdata.get("isAdmin") as UserRole,
        color,
        createdAt: date.getFullYear().toString(),
        img: path.replace("public", "").replace(/\\/g, "/"),
      },
    });
  });
  revalidatePath("/dashboard");
};
