"use client";

import Image from "next/image";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left Section: Hero */}
      <section className="relative hidden w-1/2 flex-col items-center justify-center bg-[#E0E9FF] p-12 lg:flex">
        <div className="relative aspect-square w-full max-w-112.5 overflow-hidden rounded-lg bg-white">
          <Image
            src="/assets/images/login-page-image.png"
            alt="Organized Shelf Illustration"
            className="h-full w-full object-contain"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-12 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Organize Everything
          </h1>
          <p className="mt-4 max-w-md text-slate-600">
            Keep track of your belongings, warranties, and important documents
            all in one secure place.
          </p>
        </div>
      </section>

      {/* Right Section: Form */}
      <section className="flex w-full flex-col items-center justify-center bg-[#F8FAFC] p-8 lg:w-1/2">
        <div className="w-full max-w-100">
          <LoginForm />

          <div className="mt-8 text-center text-xs text-slate-400">
            <p>Version 1.2.4</p>
            <div className="mt-2 flex justify-center gap-4">
              <span className="cursor-pointer hover:underline">
                Help Center
              </span>
              <span>•</span>
              <span className="cursor-pointer hover:underline">
                Privacy Policy
              </span>
              <span>•</span>
              <span className="cursor-pointer hover:underline">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
