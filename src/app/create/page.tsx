"use client";
import { useState } from "react";

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    capacity: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle event creation
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Create New Event</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Event Title</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-white mb-2">Description</label>
            <textarea
              className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700 h-32"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Date</label>
              <input
                type="date"
                className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-white mb-2">Time</label>
              <input
                type="time"
                className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-white mb-2">Location</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-white mb-2">Capacity</label>
            <input
              type="number"
              className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700"
              value={formData.capacity}
              onChange={(e) =>
                setFormData({ ...formData, capacity: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}
