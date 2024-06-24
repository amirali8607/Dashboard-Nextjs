export default function AddProductPage() {
   return (
      <form action="" className="flex flex-col gap-4 p-4 bg-[#151c2c] rounded-lg">
         <h1 className="font-semibold text-xl">Add Product Form</h1>
         <input type="text" className="p-3 rounded-md bg-[#0f121b] outline-none" name="title" placeholder="Title" />
         <select name="cat" className="p-3 rounded-md bg-[#0f121b] outline-none">
            <option value="general">Choose your Categorize</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
         </select>
         <input type="text" className="p-3 rounded-md bg-[#0f121b] outline-none" name="price" placeholder="Price" />
         <input type="text" className="p-3 rounded-md bg-[#0f121b] outline-none" name="stock" placeholder="Stock" />
         <input type="text" className="p-3 rounded-md bg-[#0f121b] outline-none" name="color" placeholder="Color" />
         <input type="text" className="p-3 rounded-md bg-[#0f121b] outline-none" name="size" placeholder="Size" />
         <textarea name="desc" className="p-3 rounded-md bg-[#0f121b] outline-none" placeholder="Description"></textarea>
         <button className="bg-purple-600 rounded-md p-2 font-semibold" type="submit">Create Product</button>
      </form>
   )
}