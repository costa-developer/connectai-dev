import Link from "next/link";
import Image from "next/image";
import LogoPng from "@/public/logo.png"; // make sure your PNG is in the public folder or imported like this

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src="images/snall-logo" alt="Cruip Logo" width={28} height={28} />
    </Link>
  );
}
