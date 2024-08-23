import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa6";

export default function Home() {
  return (
    <React.Fragment>
      <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Seamlessly track and share project updates in{" "}
            <span className="text-yellow-300 underline decoration-2 underline-offset-4">
              real-time
            </span>
            , eliminating the need for endless meetings and keeping your team on
            course
          </h1>

          <p className="text-sm px-40 mb-12 opacity-90">
            Streamline your workflow and boost productivity with our intuitive
            project management tool.
          </p>

          <Button
            asChild
            size="lg"
            className="w-full max-w-sm text-lg group font-semibold bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 transition-colors duration-300"
          >
            <Link
              href="/sign-in"
              className="flex justify-center items-center gap-3"
            >
              <FaGoogle className="text-2xl" />
              <span>Sign In with Google</span>
            </Link>
          </Button>
        </div>
      </main>
    </React.Fragment>
  );
}
