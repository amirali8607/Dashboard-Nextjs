import Image from "next/image";

export default function UsersIdPage({ params }: { params: { id: string } }) {
   return (
      <div className="flex justify-center gap-10">
         <main className="bg-[#151c2c] rounded-lg p-6 w-full flex flex-col items-center h-fit gap-2 ">
            <Image src="" alt="" className="h-60 w-60" />
            <p className="font-bold text-lg">John Deos</p>
         </main>
         <form action="" className="w-full flex flex-col gap-2 bg-[#151c2c] rounded-lg p-6">
            <div className="flex flex-col gap-2">
               <p>Username</p>
               <input className="p-2 rounded-md outline-none bg-[#0f121b]" type="text" name="username" required />
            </div>
            <div className="flex flex-col gap-2">
               <p>Email Address</p>
               <input className="p-2 rounded-md outline-none bg-[#0f121b]" type="text" name="email" required />
            </div>
            <div className="flex flex-col gap-2">
               <p>Password</p>
               <input className="p-2 rounded-md outline-none bg-[#0f121b]" type="text" name="passowrd" />
            </div>
            <div className="flex flex-col gap-2">
               <p>Phone Number</p>
               <input className="p-2 rounded-md outline-none bg-[#0f121b]" type="text" name="phone" />
            </div>
            <div className="flex flex-col gap-2">
               <p>Address</p>
               <textarea className="p-2 rounded-md outline-none bg-[#0f121b]" rows={5} name="address"></textarea>
            </div>
            <div className="flex flex-col gap-2">
               <p>is Admin?</p>
               <select name="isAdmin" className="p-2 rounded-md bg-[#0f121b] outline-none">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
               </select>
            </div>
            <div className="flex flex-col gap-2">
               <p>is Active?</p>
               <select name="isActive" className="p-2 rounded-md bg-[#0f121b] outline-none">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
            </div>
            <button className="bg-purple-600 p-2 font-semibold rounded-md" type="submit">Update User</button>
         </form>
      </div>
   )
}