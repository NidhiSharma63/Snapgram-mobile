export const formatDateTime = (dateString: string) => {
  if (!dateString) {return '';}

  const date = new Date(dateString);

  // Month short name
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();

  // Time in 12-hour format
  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `${month} ${day}, ${year} at ${time}`;
};
