"use client";

export default function Home() {
  return (
    <div className="h-[90vh] font-poppins">
      {/* Main Content */}
      <main className="pt-12 py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <section className="my-24">
            <h1
              style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
              className="text-7xl font-normal leading-tight  text-white w-3/4"
            >
              Discover the best events in your city on chain
            </h1>
            <p
              style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)" }}
              className="text-white text-xl mb-10 max-w-xl font-light"
            >
              Explore popular events near you, browse by category, or check out
              community calendars.
            </p>

            {/* Search and Filter */}
            <div className="flex gap-4 mb-12">
              <div className="flex-1 bg-white rounded-full px-6 py-4 shadow-sm flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="flex-1 outline-black text-black font-light focus:outline-none font-poppins"
                />
                <div className="w-px h-6 bg-gray-200"></div>
                <select className="outline-none bg-transparent text-black font-light">
                  <option>All Categories</option>
                  <option>Technology</option>
                  <option>Design</option>
                  <option>Business</option>
                </select>
              </div>
              <button className="bg-black text-white px-8 rounded-full hover:bg-gray-800 transition-colors font-medium">
                Search
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
