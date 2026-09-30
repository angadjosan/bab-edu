const fortunes = [
  "You will ship something great this week.",
  "A bug you fixed long ago will stay fixed.",
  "Your next build will pass on the first try.",
  "Someone will star your repo today.",
  "Good things come to those who git commit.",
  "The answer you seek is in the docs.",
];

export async function GET() {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  return Response.json({ fortune, servedAt: new Date().toISOString() });
}
