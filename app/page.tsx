import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white p-8">
      {/* Spacer for vertical centering */}
      <div className="flex-grow"></div>
      
      {/* Main content - centered both horizontally and vertically */}
      <div className="text-center max-w-md flex flex-col items-center">
        <Image
          src="/icon.png"
          alt="Tiles Logo"
          width={120}
          height={120}
          priority
          className="mx-auto mb-8"
        />
        <h1 className="text-2xl font-semibold mb-4">Tiles</h1>
        <p className="text-lg">
          A new kind of notebook for making personal software.
          <br />
          <span className="text-gray-600 text-base mt-2 block">
            Early Access Q2 2025.
          </span>
        </p>
      </div>
      
      {/* Spacer between main content and footer */}
      <div className="flex-grow"></div>
      
      {/* Footer */}
      <footer className="text-sm text-gray-500 text-center w-full mt-8">
        Check{" "}
        <Link href="https://www.tilekit.dev/" className="text-blue-500 hover:underline">
          tilekit.dev
        </Link>{" "}
        for the underlying personal software runtime infrastructure.
      </footer>
    </div>
  );
}
