import { Button } from "@/components/ui/button/button";
import { Projects } from "@/lib/types";
import Image from "next/image";

const categories = [
  'All',
  'Branding',
  'UI/UX',
  'Web Development',
  'Video Production',
]


export default async function Page() {

  const res = await fetch('https://dbrandria.com/wp-json/wp/v2/portfolio?per_page=100');

  const data = await res.json() as Projects;



  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-8 gap-8  py-8 lg:px-0 ">
      <h1 className="text-center text-8xl pt-36 font-bold tracking-wide">
        Portfolio
      </h1>
      <div className="flex gap-4 text-xl mx-auto">
        {
          categories.map((category, index) => (
            <div key={index}>
              <Button className="text-primary hover:underline" variant='ghost'>
                {category}
              </Button>
              {
                index !== categories.length - 1 && (
                  <span>
                    /
                  </span>
                )
              }
            </div>
          ))
        }
      </div>
      <section className="grid grid-cols-5">
        {
          data.map((project, index) => (
            <div key={index} className="flex gap-4 flex-col ">
              <Image src={project.yoast_head_json.og_image[0].url} alt={project.title.rendered} className="w-1/3" width={500} height={500} />
              <div className="w-2/3">
                <h2 className="text-xl font-bold">
                  {project.title.rendered}
                </h2>
                <p>
                  { }
                </p>
              </div>
            </div>
          ))
        }
      </section>
    </main>
  )
}

