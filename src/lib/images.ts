// Using Lorem Picsum for reliable placeholder images
export const eventCovers = [
  "https://picsum.photos/seed/event1/800/800",
  "https://picsum.photos/seed/event2/800/800",
  "https://picsum.photos/seed/event3/800/800",
  "https://picsum.photos/seed/event4/800/800",
  "https://picsum.photos/seed/event5/800/800",

];

export const eventTypeImages = {
  fitness: "https://picsum.photos/seed/fitness/800/400",
  hackathon: "https://picsum.photos/seed/hackathon/800/400",
  conference: "https://picsum.photos/seed/conference/800/400",
  default: "https://picsum.photos/seed/default/800/400",
};

export function getRandomCover(): string {
  return eventCovers[Math.floor(Math.random() * eventCovers.length)];
}
