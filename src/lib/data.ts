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
    description:
      "Join us for an exciting Walk & Run Networking Event created for startup & tech enthusiasts eager to kickstart their fitness journey while building meaningful connections with like-minded individuals.",
    date: "2024-03-20",
    time: "07:00",
    location: "Cubbon Park Metro Entrance (Park Side)",
    capacity: 50,
    attendees: 25,
    organizer: dummyUsers[0],
    image: "fitness",
  },
  {
    id: "2",
    title: "HackDay with Cloudflare and Couchbase",
    description:
      "Join us for a day of hacking and learning with Cloudflare and Couchbase experts.",
    date: "2024-03-21",
    time: "10:00",
    location: "Couchbase India Pvt Ltd",
    capacity: 100,
    attendees: 75,
    organizer: dummyUsers[1],
    image: "hackathon",
  },
  {
    id: "3",
    title: "Together AI Summit '24",
    description:
      "A conference bringing together AI enthusiasts and experts to discuss the future of artificial intelligence.",
    date: "2024-03-22",
    time: "09:00",
    location: "The Leela Palace Bengaluru",
    capacity: 200,
    attendees: 150,
    organizer: dummyUsers[0],
    image: "conference",
  },
];

export function getAllEvents(): Event[] {
  return dummyEvents;
}

export function getEventById(id: string): Event | undefined {
  return dummyEvents.find((event) => event.id === id);
}
