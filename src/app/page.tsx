import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js!</h1>
      <p className="text-lg mb-8">This is a simple Next.js application. Brought to you by... </p>
      <Image
        src="/glitchy_catz_dark.png"
        alt="Next.js Logo"
        width={200}
        height={200}
        className="rounded-full"
      />
    </div>
  );
}
