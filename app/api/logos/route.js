// app/api/logos/route.js

const baseLogos = [
  { src: '/haute.png', alt: 'Haute Living Logo', width: 282, height: 68 },
  { src: '/michelin.png', alt: 'Michelin Guide Logo', width: 283, height: 148 },
  { src: '/travel.png', alt: 'Forbes Travel Guide Logo', width: 80, height: 123 },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = Math.min(parseInt(searchParams.get('limit') || '12', 10), 50);

  const startIndex = (page - 1) * limit;

  const items = Array.from({ length: limit }).map((_, i) => {
    const srcObj = baseLogos[(startIndex + i) % baseLogos.length];
    return {
      id: `${startIndex + i}`,
      ...srcObj,
    };
  });

  return Response.json({ items, hasMore: true });
}


