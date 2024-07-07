import Image from "next/image";
import ProjectsGrid from "../projects-grid";
import { Button } from '@/components/ui/button/button'
export function Projects() {


  return (
    <section className="h-screen  w-full py-4 gap-6 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Featured Projects</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Explore our latest work and see how we can bring your vision to life.
        </p>
      </div>
      <ProjectsGrid />
      <Button variant="shine" className="mx-auto">View All Projects</Button>
    </section>
  )
}