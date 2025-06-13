import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[url('/background.png')] bg-no-repeat bg-contain bg-center bg-fixed">
      <div className="w-[415px] max-w-md flex flex-col items-center gap-4 pb-6">
        <div className="w-[415px] max-w-md bg-white rounded-md shadow-md px-7 pb-6 pt-20">
        
        <LoginForm />
       
      </div>

      <p className="text-[12px] px-4 justify-center">By signing up, you accept our <Link href="#" className="text-blue-700 underline">Terms and Conditions</Link>. Please read our <Link href="#" className="text-blue-700 underline">Privacy Notice</Link>.</p>
      </div>


    </main>
  );
}
