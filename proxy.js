import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {

  const token = await getToken({ req: request });

  const pathName = request.nextUrl.pathname;
  console.log(pathName)

  
  if (!token) {

    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('callbackurl', pathName)


    return NextResponse.redirect( loginUrl)
  }


  return NextResponse.next();

}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 

export const config = {
  matcher: '/account/:path*',
}