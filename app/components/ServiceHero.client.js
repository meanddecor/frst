'use client';

import { useEffect, useState } from 'react';
import ServiceHero from './ServiceHero';

export default function ServiceHeroClient(props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div data-hydration-boundary>
      {mounted ? <ServiceHero {...props} /> : null}
    </div>
  );
}


