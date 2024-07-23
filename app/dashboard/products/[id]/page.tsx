import prisma from "@/app/config/db"
import UpdateProductDialog from "@/components/UpdateProduct"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default async function ProductIdPage({ params, searchParams }: { params: { id: string }, searchParams: { [key: string]: string | string[] | undefined }; }) {
   const productId = await prisma.products.findMany({
      where: {
         id: params.id
      }
   })
   return (
      <div className="flex flex-col justify-center items-center">
         {
            productId.map((item) => (
               <div key={item.id} className="flex flex-col gap-4 w-full">
                  <main className="flex flex-col items-center gap-2 rounded-lg bg-[#151c2c] p-6">
                     <Image src={item.img!} className="size-80 rounded-lg object-cover" alt="" width={100} height={100} />
                     <h1 className="text-3xl font-bold">{item.title}</h1>
                  </main>
                  <main className="flex flex-col items-center gap-2 rounded-lg bg-[#151c2c] p-6">
                     <p className="font-semibold text-2xl">Details</p>
                     <h1 className="text-lg font-semibold">Created At: {item.createdAt}</h1>
                     <section className="flex gap-4">
                        <h1 className="text-lg font-semibold">Price is {item.price}</h1>
                        <h1 className="text-lg font-semibold">Stock is {item.stock}</h1>
                     </section>
                     <p className="">Description: {item.description}</p>
                  </main>
                  <main className="flex flex-col rounded-lg bg-[#151c2c] p-6">
                     <UpdateProductDialog id={item.id} searchParams={searchParams} />
                     <h1 className="font-light text-sm text-center">Styled By: Amirali Abdelahi</h1>
                  </main>
               </div>
            ))
         }
      </div>
   )
}
