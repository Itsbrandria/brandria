import Marquee from '@/components/magicui/marquee'
import { cn } from '@/lib/utils';
import Image from 'next/image';



const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);



export function Clients() {



  return (
    <div className="relative flex h-36 w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background mt-20 gap-8">
      <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
        Our Clients
      </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <div key={review.username} className="flex items-center gap-4">
            <img src={review.img} width={50} height={50} className="rounded-full" />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{review.name}</h3>
              <p className="text-muted-foreground">{review.body}</p>
            </div>
          </div>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>)
}
