import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { HeaderSidebar } from "./sidebar/HeaderSidebar";
import { SidebarTrigger } from "./ui/sidebar";
import Link from "next/link";
import { useSingleUserGetQuery } from "@/lib/user";
import { useDispatch } from "react-redux";
import { singleuserfnc } from "@/utils/UserSlice";
import { useSelector } from "react-redux";
import { User } from "@/types/slicetypes";
import Image from "next/image";
import { MenuBar } from "./MeunuBar";

function Header() {
  const dispatch=useDispatch()
  const {data}=useSingleUserGetQuery({})
  
  useEffect(()=>{
    if (data) {
      dispatch(singleuserfnc(data))
    }
  },[data])
  const singleUserslector=useSelector((state:{userSlice:User})=>state?.userSlice)
  console.log(singleUserslector)
  return (
    <header className="w-full lg:flex lg:justify-center   bg-gradient-to-r from-white to-[#c7b8e0]   sticky top-0 z-50">
      <div className="w-[100%] 2xl:w-[1200px]">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <h3 className="text-2xl font-extrabold text-[#334155] tracking-tight hover:text-[#0061F2] transition-colors">
                Resume<span className="text-[#0061F2]">Pro</span>
              </h3>
            </Link>
          </div>
          
          

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-x-2">
             
              <Link href={`/choesoptions`}>
              
              <Button className="  bg-gradient-to-r from-[#334155] to-[#0061F2]  text-white cursor-pointer shadow-sm transition-all hover:scale-105">
                Build Resume
              </Button>
              </Link>
              
              {
                singleUserslector?.name?<>
                <div className="">
                  <MenuBar/>
                </div>
                </>:<>
                 <Link href={`/login`}>
              <Button className="bg-white  hover:bg-gradient-to-r from-[#334155] to-[#0061F2] text-[#334155] hover:text-white cursor-pointer shadow-sm transition-all hover:scale-105">
                Login
              </Button>
            </Link>
                </>
              }
           
            </div>
            
          </div>

          {/* Mobile Menu */}
          <div className="block md:hidden">
            <SidebarTrigger />
            <HeaderSidebar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
