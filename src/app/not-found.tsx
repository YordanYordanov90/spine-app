import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2  text-center px-10 py-32 mx-auto">
      <h2 className="text-4xl font-semibold ">Coming soon..</h2>

      <Link
        href="/"
        className="mt-4 rounded-md mb-4 bg-black px-8 py-3 text-xl border  border-black text-white transition-colors hover:bg-white hover:text-black"
      >
        Go Back
      </Link>
    </main>
  );
}
