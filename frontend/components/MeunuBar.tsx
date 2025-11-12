"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useSelector } from "react-redux"
import { User } from "@/types/slicetypes"
import { useLogoutMutation } from "@/lib/user"

export function MenuBar() {
  const [position, setPosition] = React.useState("bottom")
  const singleUserslector=useSelector((state:{userSlice:User})=>state?.userSlice)
  const [LogoutFnc]=useLogoutMutation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
    <Image src={singleUserslector?.picture as string} alt="img" className="rounded-full cursor-pointer" width={30} height={30} />
        
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="top" onClick={()=>LogoutFnc({})}>Logout</DropdownMenuRadioItem>

        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
