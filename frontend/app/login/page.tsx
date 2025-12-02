"use client"
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
import { useLoginMutation } from "@/lib/user"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { GoogleLogin } from "@react-oauth/google";
import GoogleLoginButton from "@/components/Googlelogin"
 function Login() {
  const router=useRouter()
 const [data, setData] = useState({
    email: "",
    password: "",
  });
const [loginFnc,{data:loginData}]=useLoginMutation()
  // 🔹 simple onChange handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };
  // 🔹 button click par function
  const handleLogin = () => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

loginFnc(formData)
  };
  useEffect(()=>{
      if (loginData?.message) {
        if (loginData?.success==false) {
         toast.error(loginData?.message)
          
        }else{
         toast.success(loginData?.message)
         router.push('/')
        }
        
      }
  
    },[loginData])

  return (
    <section className="flex justify-center items-center py-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>

          <CardAction>
            <Link href="signup">
              <Button variant="link">Sign Up</Button>
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
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
          <Button onClick={handleLogin} className="w-full bg-gradient-to-r from-[#334155] to-[#0061F2]">
            Login
          </Button>
          <GoogleLoginButton/>

        </CardFooter>
      </Card>
    </section>
  );
}
export default Login