import Link from "next/link";
import Image from "next/image";


export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src="/images/snall-logo.png" alt="Cruip Logo" width={28} height={28} />
    </Link>
  );
}
