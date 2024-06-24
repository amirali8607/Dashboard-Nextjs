import Image from "next/image";
import img1 from '@/public/1693299186760.jpg';
import img2 from '@/public/6327211.png';
import img3 from '@/public/7dfaf3e79c134e912048d0f2693a2525.jpg';
import img4 from '@/public/Untitled.png';
import img5 from '@/public/images.png';
import Link from "next/link";
export default function UsersPage() {
   return (
      <div className="w-full flex flex-col gap-6 bg-[#151c2c] p-4 rounded-lg">
         <main className="flex justify-between">
            <input type="text" placeholder="Search..." className="bg-[#41445e] rounded p-1 text-sm" />
            <Link href="/dashboard/users/addUser" className="bg-purple-600 p-1 rounded-md font-semibold">Add New</Link>
         </main>
         <table>
            <thead>
               <tr>
                  <td className="font-semibold">Name</td>
                  <td className="font-semibold">Email</td>
                  <td className="font-semibold">Created At</td>
                  <td className="font-semibold">Role</td>
                  <td className="font-semibold">Status</td>
                  <td className="font-semibold">Action</td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     <div className="flex gap-2 items-center p-2">
                        <Image alt="" className="h-12 w-12 rounded-full" src={img2} />
                        <h1>Amirali Abdelahi</h1>
                     </div>
                  </td>
                  <td>amirali@gmail.com</td>
                  <td>Oct 23 2023</td>
                  <td>client</td>
                  <td>active</td>
                  <td>
                     <div className="flex gap-1">
                        <Link href="/dashboard/users/test" className="rounded-md font-semibold bg-green-600 cursor-pointer p-1">View</Link>
                        <button className="rounded-md font-semibold bg-red-600 cursor-pointer p-1">Delete</button>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div className="flex gap-2 items-center p-2">
                        <Image alt="" className="h-12 w-12 rounded-full" src={img1} />
                        <h1>Mohsen Tahmasebi</h1>
                     </div>
                  </td>
                  <td>Mohsen@gmail.com</td>
                  <td>Oct 23 2023</td>
                  <td>admin</td>
                  <td>active</td>
                  <td>
                     <div className="flex gap-1">
                        <Link href="/dashboard/users/test" className="rounded-md font-semibold bg-green-600 cursor-pointer p-1">View</Link>
                        <button className="rounded-md font-semibold bg-red-600 cursor-pointer p-1">Delete</button>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div className="flex gap-2 items-center p-2">
                        <Image alt="" className="h-12 w-12 rounded-full" src={img3} />
                        <h1>Hossein Darabi</h1>
                     </div>
                  </td>
                  <td>darabi@gmail.com</td>
                  <td>Oct 23 2023</td>
                  <td>client</td>
                  <td>passive</td>
                  <td>
                     <div className="flex gap-1">
                        <Link href="/dashboard/users/test" className="rounded-md font-semibold bg-green-600 cursor-pointer p-1">View</Link>
                        <button className="rounded-md font-semibold bg-red-600 cursor-pointer p-1">Delete</button>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   )
}