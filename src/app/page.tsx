"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import { getAllEvents, cities } from "@/lib/data";

export default function Home() {
  const allEvents = getAllEvents();
  const [timeFilter, setTimeFilter] = useState<"all" | "today" | "month">(
    "all"
  );

  const filteredEvents = allEvents.filter((event) => {
    if (timeFilter === "all") return true;
    const eventDate = new Date(event.date);
    const today = new Date();

    if (timeFilter === "today") {
      return eventDate.toDateString() === today.toDateString();
    }

    if (timeFilter === "month") {
      return eventDate.getMonth() === today.getMonth();
    }

    return true;
  });

  return (
    <div className="h-[90vh] font-poppins">
      {/* Main Content */}
      <main className="pt-12 py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <section className="mb-24">
            <h1 className="text-7xl font-light leading-tight mb-8 text-white">
              Discover Events
            </h1>
            <p className="text-white text-lg mb-10 max-w-xl font-light">
              Explore popular events near you, browse by category, or check out
              community calendars.
            </p>

            {/* Search and Filter */}
            <div className="flex gap-4 mb-12">
              <div className="flex-1 bg-white rounded-full px-6 py-4 shadow-sm flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="flex-1 outline-none text-black font-light"
                />
                <div className="w-px h-6 bg-gray-200"></div>
                <select className="outline-none bg-transparent text-black font-light">
                  <option>All Categories</option>
                  <option>Technology</option>
                  <option>Design</option>
                  <option>Business</option>
                </select>
              </div>
              <button className="bg-black text-white px-8 rounded-full hover:bg-[#9F82E3] transition-colors font-medium">
                Search
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
