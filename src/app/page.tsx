import React from "react";
import Image from "next/image";

const Home = () => {
  const upcomingEvents = [
    {
      title: "Tech Conference 2024",
      category: "Technology",
      date: "Mar 15",
      location: "Jakarta",
      type: "Full time",
      icon: "/icons/tech.svg",
    },
    {
      title: "Design Summit",
      category: "Design",
      date: "Mar 20",
      location: "Sukabumi",
      type: "Part time",
      icon: "/icons/design.svg",
    },
    {
      title: "Business Workshop",
      category: "Business",
      date: "Mar 25",
      location: "Remote",
      type: "Beginner",
      icon: "/icons/business.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F8F9] font-poppins">
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        {/* Header */}
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B197FC] flex items-center justify-center text-white font-medium">
              E
            </div>
            <span className="text-black font-medium text-xl">EventHub</span>
          </div>
          <div className="flex items-center gap-10">
            <a href="#" className="text-[#B197FC] font-medium">
              Events
            </a>
            <a
              href="#"
              className="text-black hover:text-[#B197FC] transition-colors"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-black hover:text-[#B197FC] transition-colors"
            >
              Organize
            </a>
            <a
              href="#"
              className="text-black hover:text-[#B197FC] transition-colors"
            >
              About
            </a>
            <button className="px-6 py-2.5 rounded-full border-2 border-[#B197FC] text-[#B197FC] font-medium hover:bg-[#B197FC] hover:text-white transition-all">
              Sign in
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex justify-between items-center mb-24">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-light leading-tight mb-8 text-black">
              Find The Perfect Event Near You
            </h1>
            <p className="text-black text-lg mb-10 max-w-xl font-light">
              Discover and join amazing events happening in your area. From tech
              conferences to art workshops, find experiences that match your
              interests.
            </p>

            {/* Search Bar */}
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

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <h3 className="text-3xl font-medium text-black mb-1">500+</h3>
                <p className="text-black font-light">Events Monthly</p>
              </div>
              <div>
                <h3 className="text-3xl font-medium text-black mb-1">100k+</h3>
                <p className="text-black font-light">Active Users</p>
              </div>
              <div>
                <h3 className="text-3xl font-medium text-black mb-1">50+</h3>
                <p className="text-black font-light">Categories</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/event-illustration.png"
              alt="Events Illustration"
              width={600}
              height={500}
              className="transform"
            />
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-[#FFE34E]"></div>
            <div className="absolute top-10 right-10 w-4 h-4 bg-[#B197FC]"></div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="bg-white rounded-[2.5rem] p-16 mb-20">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-normal text-black">Upcoming Events</h2>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full bg-[#F8F8F9] text-black hover:bg-[#B197FC] hover:text-white transition-all">
                Today
              </button>
              <button className="px-6 py-2 rounded-full bg-[#F8F8F9] text-black hover:bg-[#B197FC] hover:text-white transition-all">
                This Week
              </button>
              <button className="px-6 py-2 rounded-full bg-[#F8F8F9] text-black hover:bg-[#B197FC] hover:text-white transition-all">
                This Month
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#F8F8F9] p-8 rounded-3xl hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <Image
                      src={event.icon}
                      alt={event.category}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-black">
                      {event.title}
                    </h3>
                    <p className="text-black">{event.category}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1 rounded-full bg-[#FFE34E20] text-black text-sm">
                    {event.type}
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#B197FC20] text-black text-sm">
                    {event.location}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-black">{event.date}</span>
                  <button className="text-[#B197FC] hover:text-[#9F82E3] transition-colors font-medium">
                    Register →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20">
          <div className="bg-[#B197FC] rounded-[2.5rem] p-16 text-center">
            <h2 className="text-white text-4xl font-normal mb-6">
              Want to organize an event?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Create and manage your events with our easy-to-use platform. Reach
              more attendees and grow your community.
            </p>
            <button className="bg-white text-[#B197FC] px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors font-medium">
              Start Organizing →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
