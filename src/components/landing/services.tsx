import HorizontalScrollCarousel from "./horizontal-scroll";

export function Services() {

  const cards = [
    {
      image: '/16.svg',
      title: 'Brands Creation',
      description: <p>
        Create a solid and memorable brand identity with our solutions encompassing brand strategy, design, communication, personal branding, and more.
      </p>,
      link: '/services/digital-marketing',
      btnText: 'Strength Your Brand Identity'
    },
    {
      image: '/17.svg',
      title: 'Content At Scale',
      description: <p>
        Covering all your digital production needs by delivering high-quality copywriting, photography, and state-of-the-art motion and video services.
      </p>,
      link: '/services/content-creation',
      btnText: 'Elevate Your Online Presence'
    },
    {
      image: '/18.svg',
      title: 'Digital Marketing',
      description: <p>
        We offer a full range of digital marketing services to help you grow your business and reach new heights.
      </p>,
      link: '/services/digital-marketing',
      btnText: 'Grow Your Business'
    },
    {
      image: '/19.svg',
      title: 'Web Design & Development',
      description: <p>
        We create beautiful, responsive websites that are designed to help you grow your business and reach new heights.
      </p>,
      link: '/services/web-design',
      btnText: 'Get Started'
    }
  ]



  return (
    <div className="relative w-full">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        Our Services
      </h2>
      <p className="text-lg text-center w-3/4 mx-auto pt-4">
        We offer a variety of services that can help you grow your business and reach new heights. Our team of experts is here to help you every step of the way.
      </p>
      <HorizontalScrollCarousel cards={cards} />
    </div>

  )
}