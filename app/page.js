import Event from "@/components/Event";
import Hero from "@/components/Hero";

export default function Home() {
  const events = [
    {
      title: "Crescendo",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aspernatur quibusdam accusantium adipisci beatae debitis maxime quaerat iure deserunt at ad dicta a optio pariatur enim voluptate quo iste sunt numquam, hic ullam assumenda! Aliquam itaque laboriosam aut earum sunt ea possimus delectus unde laborum?",
      image: "/party-1.jpg",
      date: "28th December, 2023",
    },
    {
      title: "Musendro",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aspernatur quibusdam accusantium adipisci beatae debitis maxime quaerat iure deserunt at ad dicta a optio pariatur enim voluptate quo iste sunt numquam, hic ullam assumenda! Aliquam itaque laboriosam aut earum sunt ea possimus delectus unde laborum?",
      image: "/party-2.jpg",
      date: "12th January, 2024",
    },
  ];

  return (
    <section className='p-24 space-y-3'>
      <Hero />
      <div className="flex gap-10 justify-center">
        {events.map((event, index) => (
          <Event
            key={index}
            index={index}
            date={event.date}
            description={event.description}
            image={event.image}
            name={event.title}
          />
        ))}
      </div>
    </section>
  );
}
