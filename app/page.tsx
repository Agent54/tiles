import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <div className="text-center max-w-md">
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
    </div>
  );
}
