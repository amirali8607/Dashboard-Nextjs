"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

export function LogoutButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-sm">
        Logout
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#0f121b]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently logout of your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-[#0f121b]">Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <Button onClick={
              () => signOut()
            }>Logout Anyway</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
