import Image from "next/image";

export default function Categories() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="relative flex h-[324px] items-center justify-center">

            {/* Small blue dots background */}
            <div className="absolute -z-10">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
              </svg>
            </div>

            {/* Rotating light around main logo */}
            <div className="absolute -z-10 w-[150px] h-[150px] flex items-center justify-center">
              <div
                className="w-full h-full rounded-full animate-spin"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(59, 130, 246, 0) 100%)",
                }}
              ></div>
            </div>

            {/* Logos with breathing animation */}
            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center">

                {/* Main logo */}
                <div className="flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5 animate-[breath_8s_ease-in-out_infinite_both]">
                    <Image
                      className="relative"
                      src="images/logo-01.svg"
                      width={32}
                      height={32}
                      alt="Logo 01"
                    />
                  </div>
                </div>

                {/* Surrounding logos */}
                <div className="absolute -translate-x-[136px] animate-[breath_7s_ease-in-out_3s_infinite_both]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
                    <Image
                      src="images/logo-02.svg"
                      width={23}
                      height={22}
                      alt="Logo 02"
                    />
                  </div>
                </div>

                <div className="absolute translate-x-[136px] animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
                    <Image
                      src="images/logo-03.svg"
                      width={22}
                      height={22}
                      alt="Logo 03"
                    />
                  </div>
                </div>

                <div className="absolute -translate-x-[216px] -translate-y-[82px] animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
                    <Image
                      src="images/logo-04.svg"
                      width={24}
                      height={22}
                      alt="Logo 04"
                    />
                  </div>
                </div>

                <div className="absolute -translate-y-[82px] translate-x-[216px] animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
                    <Image
                      src="images/logo-05.svg"
                      width={25}
                      height={25}
                      alt="Logo 05"
                    />
                  </div>
                </div>

                <div className="absolute translate-x-[216px] translate-y-[82px] animate-[breath_6s_ease-in-out_2s_infinite_both]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
                    <Image
                      src="images/logo-06.svg"
                      width={20}
                      height={18}
                      alt="Logo 06"
                    />
                  </div>
                </div>

                <div className="absolute -translate-x-[216px] translate-y-[82px] animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
                    <Image
                      src="images/logo-07.svg"
                      width={25}
                      height={25}
                      alt="Logo 07"
                    />
                  </div>
                </div>

              </article>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
