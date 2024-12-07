import { Event, User } from "@/types";

export const dummyUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=b6e3f4",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane&backgroundColor=c0aede",
  },
];

export const dummyEvents: Event[] = [
  {
    id: "1",
    title: "Fitness & Networking over a Run @Cubbon Park",
    description: "Join us for an exciting Walk & Run Networking Event...",
    date: "2024-03-20",
    time: "07:00",
    location: "Cubbon Park Metro Entrance (Park Side)",
    latitude: 12.9716,
    longitude: 77.5946,
    category: "Fitness",
    type: "Full time",
    capacity: 50,
    attendees: 25,
    organizer: dummyUsers[0],
    image: {
      src: "/events/fitness.jpg",
      type: "fitness",
    },
    placeId: "ChIJa9IGFXYXrjsRsRxlSYAkZRU",
  },
  {
    id: "2",
    title: "HackDay with Cloudflare and Couchbase",
    description:
      "Join us for a day of hacking and learning with Cloudflare and Couchbase experts.",
    date: "2024-03-21",
    time: "10:00",
    location: "Couchbase India Pvt Ltd",
    latitude: 12.9279,
    longitude: 77.6271,
    category: "Technology",
    type: "Full time",
    capacity: 100,
    attendees: 75,
    organizer: dummyUsers[1],
    image: {
      src: "/events/hackathon.jpg",
      type: "hackathon",
    },
    placeId: "ChIJa9IGFXYXrjsRsRxlSYAkZRU",
  },
  {
    id: "3",
    title: "Together AI Summit '24",
    description:
      "A conference bringing together AI enthusiasts and experts to discuss the future of artificial intelligence.",
    date: "2024-03-22",
    time: "09:00",
    location: "The Leela Palace Bengaluru",
    latitude: 12.9606,
    longitude: 77.6484,
    category: "Technology",
    type: "Full time",
    capacity: 200,
    attendees: 150,
    organizer: dummyUsers[0],
    image: {
      src: "/events/conference.jpg",
      type: "conference",
    },
    placeId: "ChIJa9IGFXYXrjsRsRxlSYAkZRU",
  },
];

export function getEventById(id: string): Event | undefined {
  return dummyEvents.find((event) => event.id === id);
}

export const cities = [
  { code: "JKT", name: "Jakarta", eventCount: 45 },
  { code: "SF", name: "San Francisco", eventCount: 24 },
  { code: "NY", name: "New York", eventCount: 32 },
  { code: "LD", name: "London", eventCount: 28 },
  { code: "TK", name: "Tokyo", eventCount: 19 },
  { code: "PR", name: "Paris", eventCount: 22 },
];

export function getAllEvents(): Event[] {
  return dummyEvents;
}
