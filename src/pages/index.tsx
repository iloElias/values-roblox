import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold">Welcome to Roblox Value Hub</h1>
      <p className="mt-4">Select a game to see the item values:</p>
      <ul className="mt-6 space-y-4">
        <li>
          <Link href="http://mm2.valuesroblox.com" className="text-blue-500 hover:underline">
            Murder Mystery 2
          </Link>
        </li>
        <li>
          <Link href="http://ftf.valuesroblox.com" className="text-blue-500 hover:underline">
            Flee the Facility
          </Link>
        </li>
      </ul>
    </div>
  );
}
