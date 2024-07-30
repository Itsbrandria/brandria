"use client"
import { Button } from "@/components/ui/button/button";
import { Project, Projects } from "@/lib/types";
import { useQuery } from '@tanstack/react-query'
import Image from "next/image";


export default function Page({ params }: { params: { ProjectSlug: string } }) {
  const projectSlug = params.ProjectSlug;


  const { data: project, isFetched } = useQuery({
    queryKey: ["project", projectSlug],
    queryFn: () => fetch(`https://dbrandria.com/wp-json/wp/v2/portfolio?slug=${projectSlug}`).then(async (res) => await res.json() as Projects),
    select(data) {
      let proj = data[0] as Project;
      return proj;
    }
  })



  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-8 gap-8  py-8 lg:px-0 ">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 w-full">
          <div className="flex flex-col gap-4">
            <img
              src={project?.yoast_head_json.og_image[0].url}
              width={2000}
              height={200}
              alt="Project Showcase"
              className="rounded-lg overflow-hidden w-full h-96 object-cover object-top"
            />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Date:</span> April 2023
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Category:</span> Web Design
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Project Showcase</h2>
            <p className="text-muted-foreground">
              This is a showcase of a recent web design project. The design features a clean and modern aesthetic, with a
              focus on user-friendly navigation and intuitive interactions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">Desktop Version</h3>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Desktop Version"
                  className="rounded-lg overflow-hidden"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">Mobile Version</h3>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Mobile Version"
                  className="rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline">Preview</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}