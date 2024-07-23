import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import github from "next-auth/providers/github";
import prisma from "./app/config/db";
import { signInSchema } from "./app/lib/zod";

export default {
  providers: [
    credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFields = signInSchema.safeParse(credentials);
        if (!validatedFields.success) return null;
        const { email, password } = validatedFields.data;
        const user = await prisma.users.findFirst({
          where: {
            email,
          },
        });
        console.log(user);
        if (!user || !user.email) return null;
        if (user.password != password) return null;
        console.log("login succes");
        return user;
      },
    }),
    github({
      clientId: "Ov23liOuE6W3acCN1VJR",
      clientSecret: "1f975c848b0c9905bbd2f59afba5f7f9f9e43cbf",
    }),
  ],
} satisfies NextAuthConfig;
