export default function LoginPage() {
   return (
      <div className="w-full h-screen flex justify-center items-center">
         <form className="flex flex-col w-[400px] gap-6 p-12 bg-[#151c2c] rounded-lg " action="">
            <h1 className="text-4xl text-center font-bold">Signin Form</h1>
            <input type="text" placeholder="Email Address" name="email" className="p-4 rounded-md bg-[#0f121b] outline-none" />
            <input type="text" placeholder="Password" name="password" className="p-4 rounded-md bg-[#0f121b] outline-none" />
            <button className="p-4 rounded-md bg-purple-600 font-semibold" type="submit">Login</button>
            <p></p>
         </form>
      </div>
   )
}