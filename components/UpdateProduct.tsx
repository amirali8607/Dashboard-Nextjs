import { updateProduct } from "@/app/actions/update"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { redirect } from "next/navigation"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export default function UpdateProductDialog({ id, searchParams }: { id: string, searchParams: { [key: string]: string | string[] | undefined }; }) {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button className="w-full">Edit Product</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px] bg-[#151c2c]">
            <DialogHeader>
               <DialogTitle>Edit Product</DialogTitle>
               <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
               </DialogDescription>
            </DialogHeader>

            <form action={
               async (data: FormData) => {
                  "use server"
                  await updateProduct(id, data)
                  redirect("/dashboard/products")
               }
            } className="w-full flex flex-col gap-2 rounded-lg">
               <div className="flex flex-col gap-2">
                  <Label>Description</Label>
                  <Input defaultValue={searchParams.description} className="p-2 rounded-md  bg-[#0f121b]" type="text" name="desc" required />
               </div>
               <div className="flex flex-col gap-2">
                  <Label>Price</Label>
                  <Input defaultValue={searchParams.price} className="p-2 rounded-md  bg-[#0f121b]" type="text" name="price" />
               </div>
               <Button className="bg-purple-600 p-2 font-semibold rounded-md" type="submit">Update Product</Button>
            </form>
         </DialogContent>
      </Dialog>
   )
}