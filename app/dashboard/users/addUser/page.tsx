export default function AddUserPage() {
   return (
      <form action="" className="w-full flex flex-col gap-4 bg-[#151c2c] rounded-lg p-4">
         <h1 className="text-xl font-semibold">Add User Form</h1>
         <input type="text" className="p-3 rounded-md bg-[#0f121b] outline-none" name="username" placeholder="Username" required />
         <input type="text" className="p-3 rounded-md bg-[#0f121b] outline-none" name="email" placeholder="Email Address" required />
         <input type="text" className="p-3 rounded-md bg-[#0f121b] outline-none" name="passowrd" placeholder="Passowrd" required />
         <input type="text" className="p-3 rounded-md bg-[#0f121b] outline-none" name="phone" placeholder="Phone Number" />
         <select name="isAdmin" className="p-3 rounded-md bg-[#0f121b] outline-none">
            <option value="general">is Admin?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
         </select>
         <select name="isActive" className="p-3 rounded-md bg-[#0f121b] outline-none">
            <option value="general">is Active?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
         </select>
         <textarea name="address" className="p-3 rounded-md bg-[#0f121b] outline-none" placeholder="Address"></textarea>
         <button className="bg-purple-600 rounded-md font-semibold p-2" type="submit">Create User</button>
      </form>
   )
}