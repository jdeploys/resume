import type { ReactNode } from 'react';

import { Links, Meta, Scripts, ScrollRestoration } from '@remix-run/react';

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className="bg-zinc-800">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen py-8 px-4 bg-zinc-800 text-zinc-50 gap-8 bg-gradient-to-tr from-zinc-700 to-zinc-900">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
