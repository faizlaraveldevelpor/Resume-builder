"use client"
import GoogleLoginButton from "@/components/Googlelogin"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRegisterMutation } from "@/lib/user"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

 function Signup() {
  const router=useRouter()
    const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registerApi,{data:RegisterData}]=useRegisterMutation()

  // 🔹 onChange handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  // 🔹 button click function
  const handleSignup = () => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    registerApi(formData)
    console.log(RegisterData);
    
    
  };

  useEffect(()=>{
    if (RegisterData?.message) {
      if (RegisterData?.success==false) {
       toast.error(RegisterData?.message)
        
      }else{
       toast.success(RegisterData?.message)
         router.push('/')
      }
      
    }

  },[RegisterData])

  return (
    <section className="flex justify-center items-center py-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign up to your account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>

          <CardAction>
            <Link href="/login">
              <Button variant="link">Login</Button>
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                value={data.name}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                value={data.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button onClick={handleSignup} className="w-full bg-gradient-to-r from-[#334155] to-[#0061F2]">
            Sign Up
          </Button>
          <GoogleLoginButton/>
          
        </CardFooter>
      </Card>
    </section>
  );
}
export default Signup