import React from "react";
import Link from "next/link";
const Error = () => {
  return (
    <div className="grid h-[60vh] place-content-center  px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-400">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
          Page not found!
        </p>

        <p className="mt-4 text-gray-500 ">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Please
          check the URL in your address bar and try again.
        </p>

        <Link
          href="/"
          aria-label="Home Link"
          className="mt-6 inline-block rounded bg-indigo-700 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
