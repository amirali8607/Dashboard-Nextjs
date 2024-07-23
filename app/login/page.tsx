"use client"
import { redirect } from "next/navigation"
import { loginAction } from "../actions/login"
import { useToast } from "@/components/ui/use-toast"
import GithubButton from "@/components/Buttons"


export default function LoginPage() {
   const { toast } = useToast()
   return (
      <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
         <form action={
            async (data: FormData) => {
               const res = await loginAction(data)
               if (res?.error) {
                  return toast({
                     title: "Message:",
                     description: res.error,
                     variant: "destructive"
                  })
               }
               redirect("/dashboard")
            }
         } className="flex flex-col w-[400px] gap-6 p-10 bg-[#151c2c] rounded-lg">
            <h1 className="text-4xl text-center font-bold">Signin Form</h1>
            <input type="text" placeholder="Email Address" name="email" className="p-4 rounded-md bg-[#0f121b] outline-none" />
            <input type="password" placeholder="Password" name="password" className="p-4 rounded-md bg-[#0f121b] outline-none" />
            <button className="p-4 rounded-md bg-purple-600 font-semibold" type="submit">Login</button>
         </form>
         <GithubButton />
      </div>
   )
}