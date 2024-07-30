import { BlogBody } from "@/components/BlogBody";
import { type Projects, type Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const blockedProjects = [
  196,
  471
];

export default async function Page() {

  
  const res = await fetch('https://dbrandria.com/wp-json/wp/v2/portfolio?per_page=100');

  let data = await res.json() as Projects;



  data = data.filter(project => !blockedProjects.includes(project.id));



  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-8 gap-8  py-8 lg:px-0 ">
      <section className="w-full py-12 md:py-24 lg:py-32 px-12 md:px-24">
        <div className=" grid gap-8 px-4 md:px-6">
        <BlogBody data={data}/>
        </div>
      </section>
    </main>
  )
}


 {/* <div className="p-3 col-span-1 sm:col-span-1 flex flex-col gap-2 items-start bg-slate-700">
            <Image
            src="/Map.png"
            alt="Blue Tree"
            width={400}
            height={400}
            />
            <Link href="/">link</Link>
            <h1>Top Advertising Agencies In Cairo, Egypt For 2024</h1>
            <span className="font-mono">By Digital Brandria . June 18, 2024</span>
            <p>
              Advertising Agencies, Or Digital Advertising Agencies Are Special Type Of 
              Companies That Utilize Digital Media For Advertising. Lets Discover The Top 
              Advertising Agencies In Egypt For 2024, Their Budget Rate, Offered Services 
              And Reviews. Top Advertising Agencies In Egypt 2024 Agency Name Agency Budget Rate Agency 
              Reviews Digital Brandria 15,000 EGP to 50,000 EGP 
            </p>
            <Link href="#" className="hover:text-red-600">Read More</Link>

          </div>
          <div className="p-3 col-span-1 sm:col-span-1 flex flex-col gap-2 items-start bg-slate-700">
            <Image
            src="/Map.png"
            alt="Blue Tree"
            width={400}
            height={400}
            />
            <Link href="/">link</Link>
            <h1>Top Advertising Agencies In Cairo, Egypt For 2024</h1>
            <span className="font-mono">By Digital Brandria . June 18, 2024</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Link href="#" className="hover:text-red-500">Read More</Link>

          </div>
          <div className="p-3 col-span-1 sm:col-span-1 flex flex-col gap-2 items-start bg-slate-700">
            <Image
            src="/Map.png"
            alt="Blue Tree"
            width={400}
            height={400}
            />
            <Link href="/">link</Link>
            <h1>Top Advertising Agencies In Cairo, Egypt For 2024</h1>
            <span>By Digital Brandria . June 18, 2024</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Link href="#" className="hover:text-red-500">Read More</Link>
          </div> */}

