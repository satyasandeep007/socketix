import Link from "next/link";
import EventImage from "./EventImage";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image: "fitness" | "hackathon" | "conference" | "default";
}

export default function EventCard({
  id,
  title,
  date,
  location,
  image,
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <div className="bg-slate-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all">
        <div className="aspect-video relative">
          <EventImage title={title} type={image} fill />
        </div>
        <div className="p-4">
          <h3 className="text-white font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{date}</p>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
      </div>
    </Link>
  );
}
