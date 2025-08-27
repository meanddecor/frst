'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ServicesSectionInner = dynamic(() => import('./ServicesSection'), { ssr: false });

export default function ServicesSectionClient(props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <ServicesSectionInner {...props} />;
}


