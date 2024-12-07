"use client";

import { useState } from "react";
import Link from "next/link";
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
    <div className="min-h-screen bg-[#F8F8F9] font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B197FC] flex items-center justify-center text-white font-medium">
                E
              </div>
              <Link href="/" className="text-black font-medium text-xl">
                EventHub
              </Link>
            </div>
            <div className="flex items-center gap-10">
              <Link href="/" className="text-[#B197FC] font-medium">
                Home
              </Link>
              <Link
                href="/events"
                className="text-black hover:text-[#B197FC] transition-colors"
              >
                Events
              </Link>
              <Link
                href="/categories"
                className="text-black hover:text-[#B197FC] transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/organize"
                className="text-black hover:text-[#B197FC] transition-colors"
              >
                Organize
              </Link>
              <button className="px-6 py-2.5 rounded-full border-2 border-[#B197FC] text-[#B197FC] font-medium hover:bg-[#B197FC] hover:text-white transition-all">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <section className="mb-24">
            <h1 className="text-7xl font-light leading-tight mb-8 text-black">
              Discover Events
            </h1>
            <p className="text-black text-lg mb-10 max-w-xl font-light">
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
              <button className="bg-[#B197FC] text-white px-8 rounded-full hover:bg-[#9F82E3] transition-colors font-medium">
                Search
              </button>
            </div>

            {/* Time Filters */}
            <div className="flex gap-4 mb-12">
              <button
                onClick={() => setTimeFilter("all")}
                className={`px-6 py-2 rounded-full ${
                  timeFilter === "all"
                    ? "bg-[#B197FC] text-white"
                    : "bg-[#F8F8F9] text-black hover:bg-[#B197FC] hover:text-white"
                } transition-all`}
              >
                All Events
              </button>
              <button
                onClick={() => setTimeFilter("today")}
                className={`px-6 py-2 rounded-full ${
                  timeFilter === "today"
                    ? "bg-[#B197FC] text-white"
                    : "bg-[#F8F8F9] text-black hover:bg-[#B197FC] hover:text-white"
                } transition-all`}
              >
                Today
              </button>
              <button
                onClick={() => setTimeFilter("month")}
                className={`px-6 py-2 rounded-full ${
                  timeFilter === "month"
                    ? "bg-[#B197FC] text-white"
                    : "bg-[#F8F8F9] text-black hover:bg-[#B197FC] hover:text-white"
                } transition-all`}
              >
                This Month
              </button>
            </div>
          </section>

          {/* Events Grid */}
          <section className="mb-20">
            <div className="grid grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
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
          </section>

          {/* Cities Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-black mb-8">
              Explore Local Events
            </h2>
            <div className="grid grid-cols-6 gap-6">
              {cities.map((city) => (
                <div
                  key={city.code}
                  className="bg-white p-6 rounded-2xl text-center"
                >
                  <div className="w-12 h-12 bg-[#B197FC] rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-medium">{city.code}</span>
                  </div>
                  <h3 className="text-black font-medium mb-1">{city.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {city.eventCount} Events
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
