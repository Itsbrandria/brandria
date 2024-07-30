import Image from "next/image";
import Link from "next/link";



export default async function Page() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-8 gap-8  py-8 lg:px-0 ">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className=" grid gap-8 px-4 md:px-6">
          <div className="col-span-1 bg-slate-700">
            <Image
            src="/Map.png"
            alt="Blue Tree"
            width={50}
            height={50}
            />
          </div>


        </div>
      </section>
    </main>
  )
}