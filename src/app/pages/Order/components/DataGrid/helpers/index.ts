export const getChipColor = (status: string) => {
  const statusColors: Record<
    string,
    "warning" | "info" | "secondary" | "success" | "default"
  > = {
    cooking: "warning",
    delivering: "info",
    pending: "secondary",
    received: "success",
  };

  return statusColors[status] || "default"; // Default color
};
