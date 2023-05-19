export default function formatDate(date: string) {
  const newDate = new Date(date);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = months[newDate.getMonth()];
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return `${month}, ${day} of ${year}`;
}