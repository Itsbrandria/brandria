'use client'
import { Project } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { portfolio_categories } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"


export const PortfolioItem = (project: Project) => {
  const controls = useAnimation();
  return (
    <motion.div 
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.3 }}
    className="relative group overflow-hidden rounded-lg border object-cover" style={{backgroundImage: `url(${project.yoast_head_json.og_image[0].url})`}}
    onHoverStart={() => {
      // Start animation on the animated div when hovered
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.25 },
      });
    }}
    onHoverEnd={() => {
      // Reset the animation when hover ends
      controls.start({
        opacity: 0,
        y: 200,
        transition: { duration: 0.25 },
      });
    }}
    >
      <Link href={`portfolio/${project.slug}`} prefetch={false}>
      <motion.div 

          animate={controls}
      className="w-full h-96 z-20 flex flex-col justify-center p-4 overflow-hidden bg-black/[.8]">
        <motion.h3 
          className="text-2xl font-semibold">
            {project.title.rendered}
          </motion.h3>
        <motion.p         
       className="text-muted-foreground text-3xl  overflow-auto">
        {project.yoast_head_json.og_description}
          {/* {project.portfolio_category.map(category => portfolio_categories[category]).join(', ')} */}
        </motion.p>
      </motion.div>
      </Link>
    </motion.div>

  
  )
}


      {/* <Image
        src={
          project.yoast_head_json.og_image[0].url
        }
        alt={
          project.title.rendered
        }
        width={1500}
        height={1000}
        className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform  h-96 z-20 absolute "
        loading="eager"
      /> */}
//   <motion.div
  //   className="relative w-64 h-40 bg-blue-500 rounded-lg shadow-lg overflow-hidden"
  //   whileHover={{ scale: 1.05 }}
  // >
  //   <motion.div
  //     className="absolute inset-0 flex items-center justify-center bg-blue-700 bg-opacity-0 transition-all duration-300 hover:bg-opacity-70"
  //   >
  //     {/* Hidden text that appears on hover */}
  //     <motion.p
  //       className="text-white text-lg"
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 0 }}
  //       whileHover={{ opacity: 1 }}
  //       transition={{ duration: 0.3 }}
  //     >
  //       Hovered Text
  //     </motion.p>
  //   </motion.div>

  // </motion.div>