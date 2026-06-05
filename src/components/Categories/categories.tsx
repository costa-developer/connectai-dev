import Image from "next/image";

export default function Categories() {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Trusted by modern teams everywhere
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6 items-center">
            {logos.map((i) => (
              <div
                key={i}
                className="flex h-14 items-center justify-center rounded-xl border border-border bg-card/40 backdrop-blur transition hover:bg-card hover:border-primary/30"
              >
                <Image
                  src={`/images/logo-0${i}.svg`}
                  alt={`Logo ${i}`}
                  width={28}
                  height={28}
                  className="opacity-70 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
