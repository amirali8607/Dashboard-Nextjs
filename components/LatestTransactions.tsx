import Image from "next/image";
import img1 from '@/public/1693299186760.jpg'
import img2 from '@/public/6327211.png'
import img3 from '@/public/7dfaf3e79c134e912048d0f2693a2525.jpg'
import img4 from '@/public/Untitled.png'
import img5 from '@/public/images.png'



export default function LatestTransactions() {
   return (
      <div className="flex flex-col gap-4 p-4 bg-[#151c2c] rounded-lg">
         <h1 className="text-2xl opacity-60">Latest Transactions</h1>
         <main>
            <section className="flex items-center gap-24">
               <div className="flex gap-2 items-center p-2">
                  <Image alt="" className="h-12 w-12 rounded-full" src={img2} />
                  <h1>Mohsen Tahmasebi</h1>
               </div>
               <button className="bg-yellow-600 rounded p-1">Pending</button>
               <p>2024.12.11</p>
               <p>$3,000</p>
            </section>
            <section className="flex items-center gap-24">
               <div className="flex gap-2 items-center p-2">
                  <Image alt="" className="h-12 w-12 rounded-full" src={img1} />
                  <h1 className="font-semibold">Amirali Abdelahi</h1>
               </div>
               <button className="bg-neutral-600 rounded p-1">Done</button>

               <p>2024.12.11</p>
               <p>$3,000</p>
            </section>
            <section className="flex items-center gap-24">
               <div className="flex gap-2 items-center p-2">
                  <Image alt="" className="h-12 w-12 rounded-full" src={img3} />
                  <h1>Mahdi Dawatgar</h1>
               </div>
               <button className="bg-red-600 rounded p-1">canceled</button>
               <p>2024.12.11</p>
               <p>$3,000</p>
            </section>
            <section className="flex items-center gap-24">
               <div className="flex gap-2 items-center p-2">
                  <Image alt="" className="h-12 w-12 rounded-full" src={img4} />
                  <h1>Hossein Darabi</h1>
               </div>
               <button className="bg-neutral-600 rounded p-1">Done</button>
               <p>2024.12.11</p>
               <p>$3,000</p>
            </section>
            <section className="flex items-center gap-24">
               <div className="flex gap-2 items-center p-2">
                  <Image alt="" className="h-12 w-12 rounded-full" src={img5} />
                  <h1>Adel Ghadiri</h1>
               </div>
               <button className="bg-yellow-600 rounded p-1">Pending</button>
               <p>2024.12.11</p>
               <p>$3,000</p>
            </section>
         </main>
      </div>
   );
}
