import Button from "./buttons/Button";
import Image from "next/Image";
import TravelIcon from '/public/icons/travel-icon.svg'
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { userRoles } from '../constants'

export default function Header({ session }) {
  const isAdmin = [userRoles.ADMIN, userRoles.SUPER_ADMIN].includes(session?.role);
  return (
    <div className="w-full flex justify-center bg-gray-100 border-b-2 border-gray-300 mb-11">
      <div className="w-full max-w-7xl flex justify-between p-4">
        <div className="flex items-center">
          <Link href='/' >
            <span>
              <Image src={TravelIcon} alt="Vercel Logo" width={40} height={40} className="cursor-pointer" />
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <button className="mr-4">About</button>
          <Link href='/tours'>
            <button className="mr-4">Tours</button>
          </Link>
          {session ? (
            <>
              <button className="mr-4">My tours</button>
              {isAdmin && (
                <Link href='/users'>
                  <button className="mr-4">Users</button>
                </Link>
              )}
              <Button muted={true} onClick={() => signOut()}>Sign out</Button>
            </>
          ) : (
            <Link href='/auth/signin' className="cursor-pointer">
              <Button>Sign in</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
