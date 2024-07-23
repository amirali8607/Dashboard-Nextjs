"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent } from "react"

export default function Search() {
   const searchParams = useSearchParams()
   const pathname = usePathname()
   const { replace } = useRouter()
   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams)
      if (e.target.value)
         params.set("q", e.target.value)
      else
         params.delete("q")
      replace(`${pathname}?${params}`)
   }
   return (
      <>
         <input type="text" onChange={handleSearch} className="bg-[#41445e] rounded p-1 text-sm" placeholder="Search..." />
      </>
   )
}