import EventImage from "./EventImage";
import Link from "next/link";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image: {
    src: string;
    type: "fitness" | "hackathon" | "conference" | "default";
  };
}

const EventCard = ({ id, title, date, location, image }: EventCardProps) => {
  return (
    <Link href={`/events/${id}`}>
      <div className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-all">
        <div className="relative h-48 w-full">
          <EventImage title={title} type={image.type} fill />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium text-black mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-4 py-1 rounded-full bg-[#FFE34E20] text-black text-sm">
              {date}
            </span>
            <span className="px-4 py-1 rounded-full bg-[#B197FC20] text-black text-sm">
              {location}
            </span>
          </div>
          <button className="text-[#9B87FE] hover:text-[#9F82E3] transition-colors font-medium">
            View Details →
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
