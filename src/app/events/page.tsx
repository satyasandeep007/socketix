"use client";

// import { useSession } from "next-auth/react";
// import LoginButton from "@/components/LoginButton";
// import UserMenu from "@/components/UserMenu";
import EventCard from "@/components/EventCard";
import { getAllEvents } from "@/lib/data";

export default function Home() {
  // const { data: session } = useSession();
  const events = getAllEvents();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}

      {/* Main Content */}
      <main className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">
            Discover Events
          </h1>
          <p className="text-gray-400 mb-8">
            Explore popular events near you, browse by category, or check out
            community calendars.
          </p>

          {/* Popular Events Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">
                Popular Events
              </h2>
              <button className="text-blue-400 hover:text-blue-300">
                View All
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={`${event.date} ${event.time}`}
                  location={event.location}
                  image={event.image}
                />
              ))}
            </div>
          </div>

          {/* Explore Cities Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">
              Explore Local Events
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* City Card Example */}
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xl">SF</span>
                </div>
                <h3 className="text-white">San Francisco</h3>
                <p className="text-gray-400 text-sm">24 Events</p>
              </div>
              {/* Add more city cards */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}