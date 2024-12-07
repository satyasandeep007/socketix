"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getEventById } from "@/lib/data";
import { format } from "date-fns";
import EventImage from "@/components/EventImage";

export default function EventPage() {
  const params = useParams();
  const eventId = params.id as string;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-slate-900 pt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Event not found</h1>
        </div>
      </div>
    );
  }

  const formattedDate = format(
    new Date(`${event.date}T${event.time}`),
    "PPP 'at' p"
  );

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative aspect-video w-full mb-8">
          <EventImage
            title={event.title}
            type={event.image}
            fill
            className="rounded-lg"
          />
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-white mb-4">{event.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">📅</span>
              <span className="text-white">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">📍</span>
              <span className="text-white">{event.location}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>About this event</h2>
            <p>{event.description}</p>

            <div className="mt-4">
              <h3>Capacity</h3>
              <p>
                {event.attendees} / {event.capacity} spots filled
              </p>
            </div>

            <div className="mt-4">
              <h3>Organized by</h3>
              <div className="flex items-center gap-2">
                <Image
                  src={event.organizer.image || ""}
                  alt={event.organizer.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span>{event.organizer.name}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Register for Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
