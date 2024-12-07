export type Event = {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  location: string;
  latitude: number;
  longitude: number;
  type: string;
  capacity: number;
  attendees: number;
  organizer: User;
  image: {
    src: string;
    type: string;
  };
};

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}
