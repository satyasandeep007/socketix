export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  attendees: number;
  organizer: User;
  image: "fitness" | "hackathon" | "conference" | "default";
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}
