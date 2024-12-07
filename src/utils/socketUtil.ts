export const getAllEvents = async () => {
  const response = await fetch("/api/events");
  const data = await response.json();
  return data;
};

export const getEventById = async (id: string) => {
  const response = await fetch(`/api/events/${id}`);
  const data = await response.json();
  return data;
};
