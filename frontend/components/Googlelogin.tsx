'use client';

import { useGoogleloginMutation } from "@/lib/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {
    const router=useRouter()
    const [Googleapifnc,{data}]=useGoogleloginMutation()
  const handleSuccess = async (response:CredentialResponse) => {

    // // Decode (optional)
    const userData = jwtDecode(response.credential!);
    console.log("Decoded Google User:", userData);
    Googleapifnc(userData)
    router.push("/")
  };

  const handleError = () => {
    console.log("Google Login Failed ❌");
  };

  return (
    <div className="flex justify-center mt-5">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}
