import img1 from '@/public/1693299186760.jpg';
import img2 from '@/public/6327211.png';
import img3 from '@/public/7dfaf3e79c134e912048d0f2693a2525.jpg';
import Image from "next/image";
import Link from 'next/link';
export default function ProductsPage() {
   return (
      <div className="w-full flex flex-col gap-6 bg-[#151c2c] p-4 rounded-lg">
         <main className="flex justify-between">
            <input type="text" placeholder="Search..." className="bg-[#41445e] rounded p-1 text-sm" />
            <Link href="/dashboard/products/addProduct" className="bg-purple-600 p-1 rounded-md font-semibold">Add New</Link>
         </main>
         <table className="w-[710px]">
            <thead>
               <tr>
                  <td className="font-semibold">Title</td>
                  <td className="font-semibold">Description</td>
                  <td className="font-semibold">Price</td>
                  <td className="font-semibold">Created At</td>
                  <td className="font-semibold">Stock</td>
                  <td className="font-semibold">Action</td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     <div className="flex gap-2 items-center p-2">
                        <Image alt="" className="h-12 w-12 rounded-full" src={img3} />
                        <h1>Iphone 15 pro</h1>
                     </div>
                  </td>
                  <td className="text-xs">Lorem, ipsum dolor sit amet consectet</td>
                  <td>$234</td>
                  <td>Oct 23 2023</td>
                  <td>24</td>
                  <td>
                     <div className="flex gap-1">
                        <button className="rounded-md font-semibold bg-green-600 cursor-pointer p-1">View</button>
                        <button className="rounded-md font-semibold bg-red-600 cursor-pointer p-1">Delete</button>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div className="flex gap-2 items-center p-2">
                        <Image alt="" className="h-12 w-12 rounded-full" src={img1} />
                        <h1>Ig Monitor H-12</h1>
                     </div>
                  </td>
                  <td className="text-xs">Lorem, ipsum dolor sit amet consectet</td>
                  <td>$2900</td>
                  <td>Oct 23 2023</td>
                  <td>33</td>
                  <td>
                     <div className="flex gap-1">
                        <button className="rounded-md font-semibold bg-green-600 cursor-pointer p-1">View</button>
                        <button className="rounded-md font-semibold bg-red-600 cursor-pointer p-1">Delete</button>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div className="flex gap-2 items-center p-2">
                        <Image alt="" className="h-12 w-12 rounded-full" src={img2} />
                        <h1>Xiaomi 11T</h1>
                     </div>
                  </td>
                  <td className="text-xs">Lorem, ipsum dolor sit amet consectet</td>
                  <td>$300</td>
                  <td>Oct 23 2023</td>
                  <td>87</td>
                  <td>
                     <div className="flex gap-1">
                        <button className="rounded-md font-semibold bg-green-600 cursor-pointer p-1">View</button>
                        <button className="rounded-md font-semibold bg-red-600 cursor-pointer p-1">Delete</button>
                     </div>
                  </td>
               </tr>

            </tbody>
         </table>
      </div>
   )
}