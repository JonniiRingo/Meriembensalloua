'use client';

import { InlineWidget } from "react-calendly";

export function CalendlyWidget({ url }: { url: string }) {
  return (
    <InlineWidget
      url={url}
      styles={{ height: '650px' }}
    />
  );
}