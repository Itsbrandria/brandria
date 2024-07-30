import { Blog } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { format, parseISO } from 'date-fns';


export const BlogItem = (blog: Blog) => {
  
  const formatDate = (dateString: string): string => {
    // Parse the ISO date string
    const date = parseISO(dateString);
    // Format the date
    return format(date, 'MMMM d, yyyy');
  };

  const formattedDate = formatDate(blog.date);

  return (
    <div className="p-3 col-span-1 sm:col-span-1 flex flex-col gap-2 bg-slate-700">
      <Image
      src= {blog.yoast_head_json.og_image[0].url}
      alt={blog.title.rendered}
      width={400}
      height={400}
      loading="eager"
      />
      <Link href="#">{blog.link.slice(32)}</Link>
      <h1>{blog.title.rendered}</h1>
      <span className="font-mono">{blog.yoast_head_json.title +"."+ formattedDate }</span>
      <p>
        {blog.yoast_head_json.og_description}
      </p>
      <Link href="#">Read More &#x2B62;</Link>
    </div>
  )
}