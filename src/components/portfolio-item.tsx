'use client'
import { Project } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { cn, portfolio_categories } from "@/lib/utils"
import { color, motion, useAnimation } from "framer-motion"
import MouseFollower from "./MouseFollower"
import { useState } from "react"


export const PortfolioItem = (project: Project) => {
  const controls = useAnimation();
  const backgroundColor = ["bg-brand","bg-cyan-500","bg-gray-500","bg-orange-500","bg-amber-500","bg-lime-500","bg-yellow-500"];

  const [theColor, setTheColor] = useState(0);
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="relative group overflow-hidden rounded-lg border z-10 bg-center bg-cover" style={{ backgroundImage: `url(${project.yoast_head_json.og_image[0].url})` }}
      onHoverStart={() => {
        // Start animation on the animated div when hovered
        setTheColor(getRandomInt(7));
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
      <MouseFollower text="View Project" className={cn("z-30 w-20 h-20",backgroundColor[theColor])}>
        
        <motion.div
          animate={controls}
          className="w-full h-[32rem] z-20 flex flex-col p-10 overflow-hidden bg-cyan-950/65">
            <div className="flex flex-col gap-10 h-full w-full">
              <h3 className="text-xl font-semibold flex gap-1 rtl:self-center">
                <div className="bg-brand w-3 h-3 rounded-full top-2 relative"/>
                {project.title.rendered}
              </h3>
              <p className="text-3xl text-white rtl:self-center rtl:text-center"   
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3, // Change this number to set how many lines you want to show
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {project.yoast_head_json.og_description}
              </p>
            </div>
          <div className="flex gap-3">
            {project.portfolio_category.map((category,index) => ( <span className="bg-brand/75 rounded-full px-2 py-1" key={index}> {portfolio_categories[category]} </span>))}
          </div>
        </motion.div>
        </MouseFollower>
      </Link>
    </motion.div>


  )
}

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

// {project.portfolio_category.map(category => portfolio_categories[category]).join(', ')}
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
//       className="text-white text-muted-foreground text-lg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 0 }}
//       whileHover={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       Hovered Text
//     </motion.p>
//   </motion.div>

// </motion.div>