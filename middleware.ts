import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function parseBasicAuth(header: string | null): { user: string; password: string } | null {
  if (!header?.startsWith('Basic ')) return null;
  try {
    const decoded = atob(header.slice(6));
    const colon = decoded.indexOf(':');
    if (colon === -1) return null;
    return { user: decoded.slice(0, colon), password: decoded.slice(colon + 1) };
  } catch {
    return null;
  }
}

/**
 * Private Vercel hosting:
 * - Set PRIVATE_SITE_PASSWORD (and optionally PRIVATE_SITE_USER) in the Vercel project
 *   Environment Variables for Production and Preview. The whole site then requires HTTP Basic Auth.
 * - Leave these unset locally for normal `next dev` without a prompt.
 * - For a low-profile URL, skip a custom domain and share only the default *.vercel.app deployment URL,
 *   or enable Vercel Deployment Protection under Project → Settings → Deployment Protection.
 */
export function middleware(request: NextRequest) {
  const password = process.env.PRIVATE_SITE_PASSWORD;
  if (!password) {
    return NextResponse.next();
  }

  const expectedUser = process.env.PRIVATE_SITE_USER ?? 'preview';
  const creds = parseBasicAuth(request.headers.get('authorization'));
  if (creds?.user === expectedUser && creds.password === password) {
    return NextResponse.next();
  }

  return new NextResponse('This preview requires a password.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Golden Spur concept preview"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export const config = {
  matcher: '/:path*',
};
