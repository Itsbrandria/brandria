import { Project } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { portfolio_categories } from "@/lib/utils"


export const PortfolioItem = (project: Project) => {

  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Link href={`portfolio/${project.slug}`} className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View project</span>
      </Link>
      <Image
        src={
          project.yoast_head_json.og_image[0].url
        }
        alt={
          project.title.rendered
        }
        width={1500}
        height={1000}
        className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform  h-96"
        loading="eager"
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