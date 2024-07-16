export default async function VideoComponent({
  src,
  title
}: {
  src: string,
  title: string
}
) {

  return <iframe
    width="1280"
    height="720"
    className="w-full"
    src={src}
    title={title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
}