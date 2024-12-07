"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getEventById } from "@/lib/data";
import Avatar from "@/components/Avatar";
import EventImage from "@/components/EventImage";
import { motion } from "framer-motion";

export default function EventPage() {
  const params = useParams();
  const eventId = params.id as string;
  const event = getEventById(eventId);
  const [ticketCount, setTicketCount] = useState(1);

  const handleTicketChange = (delta: number) => {
    setTicketCount((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Event not found</h1>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F0F7FF]"
    >
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-12">
        <div className="grid grid-cols-[1.2fr,1fr] gap-8">
          {/* Left Column - Event Image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="rounded-3xl overflow-hidden shadow-md"
          >
            <EventImage
              title={event.title}
              type={event.image}
              fill
              className="rounded-3xl"
            />
          </motion.div>

          {/* Right Column - Event Details */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 bg-white p-6 rounded-3xl shadow-sm"
          >
            {/* Location Badge */}
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-amber-50 text-amber-800 px-4 py-1.5 rounded-full">
                Featured in {event.city}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900">{event.title}</h1>

            {/* Date and Time */}
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <div className="text-xs text-gray-500 uppercase">DEC</div>
                <div className="text-2xl font-bold text-gray-900">8</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Sunday 8 December
                </div>
                <div className="text-gray-600">7:00 am - 9:30 am</div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400 mt-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-semibold text-gray-900">
                    {event.location}
                  </div>
                  <div className="text-gray-500">
                    {event.city}, {event.state}
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Section */}
            <div className="bg-gray-50 rounded-2xl p-5 space-y-5">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span className="font-medium text-gray-900">
                  Approval Required
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Your registration is subject to approval by the host.
              </p>

              {/* Tickets Counter */}
              <div className="flex items-center justify-between py-2">
                <span className="font-medium text-gray-900">Tickets</span>
                <div className="flex items-center gap-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTicketChange(-1)}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors"
                  >
                    -
                  </motion.button>
                  <motion.span
                    key={ticketCount}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-8 text-center font-medium text-gray-900"
                  >
                    {ticketCount}
                  </motion.span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTicketChange(1)}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Request to Join
              </motion.button>
            </div>

            {/* Host */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Hosted By
              </h3>
              <div className="flex flex-col gap-2">
                {event.organizers?.map((organizer, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center gap-3 bg-white p-3 rounded-xl"
                  >
                    <Avatar
                      src={organizer.image}
                      alt={organizer.name}
                      size={36}
                    />
                    <span className="font-medium text-gray-900">
                      {organizer.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Attendees */}
            <div>
              <div className="text-sm text-gray-500 mb-2">
                {event.attendees} Going
              </div>
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Avatar
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                      alt={`Attendee ${i + 1}`}
                      size={32}
                      className="border-2 border-white"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
