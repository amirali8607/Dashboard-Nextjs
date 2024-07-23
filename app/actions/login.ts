"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const loginAction = async (data: FormData) => {
  try {
    await signIn("credentials", data);
    console.log("Login success!");
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error.type);
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Username or password incorrect!",
          };
        default:
          return {
            error: "Username or Password incorrect!",
          };
      }
    }
    throw error;
  }
};
