"use client";
import { useState } from "react";
import Image from "next/image";
import { eventCovers, getRandomCover } from "@/lib/images";

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: "Event Name",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: "",
    description: "",
    isPublic: true,
    requireApproval: false,
    capacity: "Unlimited",
    theme: "Minimal",
    coverImage: getRandomCover(),
  });

  const [showCoverOptions, setShowCoverOptions] = useState(false);

  const handleCoverChange = (newCover: string) => {
    setFormData({ ...formData, coverImage: newCover });
    setShowCoverOptions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle event creation
    // router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#F8F8F9] font-poppins">
      {/* Navigation */}

      {/* Main Content */}
      <main className="pt-32 px-8 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-[300px,1fr] gap-8">
          {/* Event Cover */}
          <div className="space-y-4">
            <div className="relative">
              <div className="aspect-square relative bg-white rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={formData.coverImage}
                  alt="Event cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setShowCoverOptions(true)}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Cover Options Modal */}
              {showCoverOptions && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-black font-medium">Choose Cover</h3>
                      <button
                        onClick={() => setShowCoverOptions(false)}
                        className="text-black/60 hover:text-black p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {eventCovers.map((cover, index) => (
                        <button
                          key={index}
                          onClick={() => handleCoverChange(cover)}
                          className="aspect-square relative rounded-xl overflow-hidden hover:ring-2 hover:ring-[#B197FC] transition-all"
                        >
                          <Image
                            src={cover}
                            alt={`Cover option ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm space-y-2">
              <label className="block text-sm text-black/60">Theme</label>
              <select
                value={formData.theme}
                onChange={(e) =>
                  setFormData({ ...formData, theme: e.target.value })
                }
                className="w-full bg-[#F8F8F9] text-black p-2 rounded-lg"
              >
                <option>Minimal</option>
                <option>Modern</option>
                <option>Classic</option>
              </select>
            </div>
          </div>

          {/* Event Details Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full bg-transparent text-4xl font-light text-black border-none focus:outline-none focus:ring-0"
              placeholder="Event Name"
            />

            {/* Date and Time */}
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
              <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center">
                <span className="text-black/60">Start</span>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="bg-[#F8F8F9] text-black p-2 rounded-lg"
                />
                <input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) =>
                    setFormData({ ...formData, startTime: e.target.value })
                  }
                  className="bg-[#F8F8F9] text-black p-2 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center">
                <span className="text-black/60">End</span>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  className="bg-[#F8F8F9] text-black p-2 rounded-lg"
                />
                <input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) =>
                    setFormData({ ...formData, endTime: e.target.value })
                  }
                  className="bg-[#F8F8F9] text-black p-2 rounded-lg"
                />
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <input
                type="text"
                placeholder="Add Event Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full bg-transparent text-black placeholder-black/40 border-none focus:outline-none focus:ring-0"
              />
              <p className="text-sm text-black/60">
                Offline location or virtual link
              </p>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <textarea
                placeholder="Add Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full bg-transparent text-black placeholder-black/40 border-none focus:outline-none focus:ring-0 min-h-[100px]"
              />
            </div>

            {/* Event Options */}
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-black font-medium">Event Options</h3>

              {/* Tickets */}
              <div className="flex justify-between items-center">
                <span className="text-black/60">Tickets</span>
                <span className="text-black/60">Free</span>
              </div>

              {/* Approval */}
              <div className="flex justify-between items-center">
                <span className="text-black/60">Require Approval</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.requireApproval}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        requireApproval: e.target.checked,
                      })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#F8F8F9] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B197FC]"></div>
                </label>
              </div>

              {/* Capacity */}
              <div className="flex justify-between items-center">
                <span className="text-black/60">Capacity</span>
                <input
                  type="text"
                  value={formData.capacity}
                  onChange={(e) =>
                    setFormData({ ...formData, capacity: e.target.value })
                  }
                  className="bg-transparent text-black text-right focus:outline-none"
                />
              </div>
            </div>

            {/* Create Button */}
            <button
              type="submit"
              className="w-full bg-[#B197FC] text-white py-4 rounded-full hover:bg-[#9F82E3] transition-colors font-medium"
            >
              Create Event
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
