import Link from "next/link"
import { Button } from "@/components/ui/button/button"
import Image from "next/image"

export default function ProjectsGrid() {
  return (
    <div className="container grid gap-8 px-4 md:px-6">

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative group overflow-hidden rounded-lg col-span-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            src="https://dbrandria.com/wp-content/uploads/2022/11/capmas.jpg"
            alt="Capmas"
            width={800}
            height={600}
            className="object-cover w-full h-[400px] transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="font-semibold text-lg">Capmas</h3>
            <p className="text-sm line-clamp-2">
              Central Agency for Public Mobilization and Statistics.              </p>
            <Button variant="ringHover" size="sm">
              View More
            </Button>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            src="https://dbrandria.com/wp-content/uploads/2023/07/shoryan-men-dahab.jpg"
            alt="Shoryan Mn Dahab"
            width={400}
            height={300}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="font-semibold text-lg">Shoryan Mn Dahab</h3>
            <p className="text-sm line-clamp-2">
              Documentary about the history of the Suez Canal.              </p>
            <Button variant="ringHover" size="sm">
              View More
            </Button>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            src="https://dbrandria.com/wp-content/uploads/2023/07/mn-elshorfa.webp"
            alt="Mn Elshorfa"
            width={400}
            height={300}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="font-semibold text-lg">Mn Elshorfa</h3>
            <p className="text-sm line-clamp-2">
              A detailed description of the third project showcased in the gallery.
            </p>
            <Button variant="ringHover" size="sm">
              View More
            </Button>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg col-span-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            src="https://dbrandria.com/wp-content/uploads/2023/07/arabl-2048x1118.webp"
            alt="Arab League"
            width={800}
            height={600}
            className="object-cover w-full h-[400px] transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="font-semibold text-lg">Arab League Documentry</h3>
            <p className="text-sm line-clamp-2">
              A detailed description of the fourth project showcased in the gallery.
            </p>
            <Button variant="ringHover" size="sm">
              View More
            </Button>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            src="https://dbrandria.com/wp-content/uploads/2023/07/lng.webp"
            alt="Project 5"
            width={400}
            height={300}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="font-semibold text-lg">Egyptain LNG</h3>
            <p className="text-sm line-clamp-2">
              A detailed description of the fifth project showcased in the gallery.
            </p>
            <Button variant="ringHover" size="sm">
              View More
            </Button>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Project</span>
          </Link>
          <Image
            src="https://dbrandria.com/wp-content/uploads/2023/07/elrehla-cover.webp"
            alt="Project 6"
            width={400}
            height={300}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <h3 className="font-semibold text-lg">
              El Rehla
            </h3>
            <p className="text-sm line-clamp-2">
              A detailed description of the sixth project showcased in the gallery.
            </p>
            <Button variant="ringHover" size="sm">
              View More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}