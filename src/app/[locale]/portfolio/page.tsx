
import { PortfolioBody } from "@/components/ProjectsBody";
import { type Projects, type Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const categories = [
  'All',
  'Branding',
  'UI/UX',
  'Web Development',
  'Video Production',
]


export default async function Page() {

  const res = await fetch('https://dbrandria.com/wp-json/wp/v2/portfolio?per_page=100');

  let data = await res.json() as Projects;

  const blockedProjects = [
    196,
    471
  ]

  data = data.filter(project => !blockedProjects.includes(project.id));

  const portfolio_categories: { [key: string]: number } = {
    'Branding': 8,
    'UI/UX': 9,
    'Web Development': 10,
    'Video Production': 11,
  }


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

export const PortfolioItem = (project: Project) => {

  const portfolio_categories: { [key: number]: string } = {
    8: 'Branding',
    9: 'UI/UX',
    10: 'Web Development',
    11: 'Video Production',
  }

  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View project</span>
      </Link>
      <Image
        src={
          project.yoast_head_json.og_image[0].url
        }
        alt="Project 1"
        width={1500}
        height={1000}
        className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform  h-96"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{
          project.title.rendered
        }</h3>
        <p className="text-muted-foreground">
          {
            project.portfolio_category.map(category => portfolio_categories[category]).join(', ')
          }
        </p>

      </div>
    </div>
  )
}