
import { PortfolioBody } from "@/components/ProjectsBody";
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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className=" grid gap-8 px-4 md:px-6">
          <PortfolioBody data={data} />
        </div>
      </section>
    </main>
  )
}