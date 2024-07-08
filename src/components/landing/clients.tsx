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
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background mt-20 gap-8">
      <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
        Our Clients
      </h2>
      <p className='text-center w-3/4 text-lg'>
        We are proud to work and provide digital marketing services to a diverse group of distinguished clients across various sectors, sizes, and countries such as 🇪🇬Egypt, 🇸🇦Saudi Arabia, 🇦🇪UAE, 🇶🇦Qatar, 🇰🇼Kuwait, 🇧🇭Bahrain, 🇺🇸United States, 🇩🇪Germany, 🇬🇧England, 🇫🇷France, and other countries. We offer customized solutions that meet the needs of each client.
      </p>
      <strong className='block font-bold text-xl italic'>
        Join our list of distinguished clients now!
      </strong>
      <Marquee pauseOnHover className="[--duration:40s] ">
        {Array.from({ length: 46 }, (_, i) => i + 10).map((client) => (
          <Image
            key={`client-${client}`}
            src={`https://dbrandria.com/wp-content/uploads/2023/06/Brandria-Logos-${client}.svg`}
            alt={`client-${client}`}
            width={50}
            height={50}
            className='w-32 h-32 object-contain mx-2'
          />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </div>)
}
