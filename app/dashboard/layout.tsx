import Navbar from "@/components/Navbar";
import Rightbar from "@/components/Rightbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="flex gap-2">
            <Sidebar />
            <div className="w-full flex flex-col gap-4 p-3">
               <Navbar />
               <section className="grid grid-cols-[69%,29%] gap-4 w-full">
                  {children}
                  <Rightbar />
               </section>
            </div>
         </body>
      </html >
   );
}