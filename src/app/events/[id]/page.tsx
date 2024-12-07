"use client";
import { useParams } from "next/navigation";
import { getEventById } from "@/lib/data";
import Avatar from "@/components/Avatar";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-[1fr,400px] gap-8">
          {/* Left Column - Event Image */}
          <div className="rounded-2xl overflow-hidden">
            <EventImage
              title={event.title}
              type={event.image}
              fill
              className="rounded-2xl"
            />
          </div>

          {/* Right Column - Event Details */}
          <div className="space-y-6">
            {/* Location Badge */}
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md font-medium">
                Featured in Bengaluru
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-slate-900">{event.title}</h1>

            {/* Date and Time */}
            <div className="flex items-start gap-4">
              <div className="text-center bg-white rounded-lg p-2 shadow-sm">
                <div className="text-xs text-gray-500 uppercase">DEC</div>
                <div className="text-xl font-bold text-gray-900">8</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Sunday 8 December
                </div>
                <div className="text-gray-600">7:00 am - 9:30 am</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div>
                <div className="font-medium text-gray-900">
                  {event.location}
                </div>
                <div className="text-gray-600">Bengaluru, Karnataka</div>
              </div>
            </div>

            {/* Registration Section */}
            <div className="bg-white rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span className="font-medium">Approval Required</span>
              </div>
              <p className="text-sm text-gray-600">
                Your registration is subject to approval by the host.
              </p>

              {/* Tickets Counter */}
              <div className="flex items-center justify-between">
                <span className="font-medium">Tickets</span>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                    -
                  </button>
                  <span className="w-8 text-center">1</span>
                  <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Request to Join
              </button>
            </div>

            {/* Hosts */}
            <div className="space-y-2">
              <h3 className="font-medium text-gray-900">Hosted By</h3>
              <div className="flex items-center gap-2">
                <Avatar
                  src={event.organizer.image || ""}
                  alt={event.organizer.name}
                  size={40}
                />
                <span className="font-medium">{event.organizer.name}</span>
              </div>
            </div>

            {/* Attendees */}
            <div>
              <div className="text-sm text-gray-600">
                {event.attendees} Going
              </div>
              <div className="flex -space-x-2 mt-2">
                {/* Add dummy avatars for attendees */}
                {[...Array(5)].map((_, i) => (
                  <Avatar
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    alt={`Attendee ${i + 1}`}
                    size={32}
                    className="border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Event Description */}
        <div className="mt-12 max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">About Event</h2>
          <div className="prose prose-slate">
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
