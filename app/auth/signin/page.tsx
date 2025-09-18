import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
// import { buttonVariants } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Access Denied
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          You must be signed in to view the admin dashboard.
        </p>
        {/*
          In a real application, you would add a sign-in form here.
          This link is for demonstration purposes.
        */}
        <Link
          href="/"
          className={buttonVariants({ variant: "default" })}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
