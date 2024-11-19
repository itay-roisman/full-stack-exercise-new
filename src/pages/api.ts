export function getRandomTimestamps() {
  const timestamps = [];

  // Get the current date
  const now = new Date();

  // Calculate the start and end of last week (Sunday to Saturday)
  const lastSunday = new Date(now);
  lastSunday.setDate(now.getDate() - now.getDay() - 7); // Last Sunday

  const lastSaturday = new Date(now);
  lastSaturday.setDate(now.getDate() - now.getDay() - 1); // Last Saturday

  // Convert to milliseconds
  const start = lastSunday.getTime();
  const end = lastSaturday.getTime();

  // Generate a random length for the array (between 1 and 10)
  const randomLength = Math.floor(Math.random() * 1000) + 1;

  for (let i = 0; i < randomLength; i++) {
    const randomTimestamp = new Date(start + Math.random() * (end - start));
    timestamps.push(randomTimestamp.toISOString()); // Convert to ISO format
  }

  return timestamps;
}
