export const formatTime = (isoDate: string): string => {
  return new Date(isoDate).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
};

export const formatDateTime = (isoDate: string): string => {
  return new Date(isoDate).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
};
