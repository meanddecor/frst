// app/api/projects/route.js

const topRow = [
  { src: '/projects/olipop.jpg', alt: 'Olipop project', width: 447, height: 330 },
  { src: '/projects/brunt.webp', alt: 'BRUNT project', width: 230, height: 330 },
  { src: '/projects/necessaire.jpg', alt: 'Necessaire project', width: 447, height: 330 },
  { src: '/projects/joybird.png', alt: 'Joybird project', width: 230, height: 330 },
  { src: '/projects/glco.webp', alt: 'GLCO project', width: 447, height: 330 },
];

const bottomRow = [
  { src: '/projects/d-project-1.webp', alt: 'D project 1', width: 447, height: 330 },
  { src: '/projects/d-project-2.png', alt: 'D project 2', width: 230, height: 330 },
  { src: '/projects/d-project-3.png', alt: 'D project 3', width: 447, height: 330 },
  { src: '/projects/d-project-4.webp', alt: 'D project 4', width: 230, height: 330 },
  { src: '/projects/d-project-5.png', alt: 'D project 5', width: 230, height: 330 },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = Math.min(parseInt(searchParams.get('limit') || '10', 10), 50);
  const row = searchParams.get('row') || 'top'; // 'top' or 'bottom'

  const source = row === 'bottom' ? bottomRow : topRow;
  const startIndex = (page - 1) * limit;

  const items = Array.from({ length: limit }).map((_, i) => {
    const img = source[(startIndex + i) % source.length];
    return {
      id: `${row}-${startIndex + i}`,
      ...img,
    };
  });

  return Response.json({ items, hasMore: true });
}


