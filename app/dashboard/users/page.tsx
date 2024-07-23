import prisma from "@/app/config/db";
import { auth } from "@/auth";
import { DeleteUserButton } from "@/components/Buttons";
import Search from "@/components/Serach";
import { UserRole } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
export default async function UsersPage({ searchParams }: { searchParams: Params }) {
   const session = await auth()
   const query = searchParams?.q;
   const users = await prisma.users.findMany({
      where: {
         NOT: {
            id: session?.user.id
         },
         username: {
            contains: query,
         },
      },
      orderBy: {
         id: "asc",
      },
   })
   return (
      <div className="w-full flex flex-col gap-6 bg-[#151c2c] p-4 rounded-lg">
         <main className="flex justify-between">
            <Search />
            {
               session?.user.role == UserRole.admin &&
               <Link href="/dashboard/users/addUser" className="bg-purple-600 p-1 rounded-md font-semibold">Add New</Link>
            }
         </main>
         <table>
            <thead>
               <tr>
                  <td className="font-semibold">Name</td>
                  <td className="font-semibold ">Email</td>
                  <td className="font-semibold ">Created At</td>
                  <td className="font-semibold ">Role</td>
                  <td className="font-semibold ">Status</td>
                  {
                     session?.user.role == UserRole.admin &&
                     <td className="font-semibold text-center">Action</td>
                  }
               </tr>
            </thead>
            <tbody>
               {
                  users.map((item) => (
                     <tr>
                        <td>
                           <div className="flex gap-2 items-center p-2">
                              <Image alt="" width={100} height={100} className="h-12 w-12 rounded-full" src={item.img!} />
                              <h1>{item.username}</h1>
                           </div>
                        </td>
                        <td>{item.email}</td>
                        <td>{item.createdAt}</td>
                        <td className="font-bold">{item.isAdmin === "user" ? "CLIENT" : "ADMIN"}</td>
                        <td className="font-bold">{item.status === "Done" ? "Active" : "notActive"}</td>
                        <td>
                           {
                              session?.user.role == UserRole.admin &&
                              <div className="flex gap-1">
                                 <Link href={{ pathname: `/dashboard/users/${item.id}`, query: { username: item.username, email: item.email, password: item.password, phonenumber: item.phonenumber, address: item.address, isAdmin: item.isAdmin, isActive: item.status } }} className="rounded-md font-semibold bg-green-600 cursor-pointer p-1">Edit User</Link>
                                 <DeleteUserButton id={item.id} />
                              </div>
                           }
                        </td>
                     </tr>
                  ))
               }
            </tbody>
         </table>
      </div>
   )
}