import Button from "./buttons/Button";
import Image from "next/Image";
import TravelIcon from '/public/icons/travel-icon.svg'
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header({ session }) {
  const isAdmin = session.role === "member";
  return (
    <div className="w-full flex justify-center bg-gray-100 border-b-2 border-gray-300 mb-11">
      <div className="w-full max-w-7xl flex justify-between p-4">
        <div className="flex items-center">
          <Link href='/' >
            <Image src={TravelIcon} alt="Vercel Logo" width={40} height={40} className="cursor-pointer" />
          </Link>
        </div>
        <div className="flex items-center">
          <p className="mr-4">About</p>
          <p className="mr-4">Explore</p>
          {session ? (
            <>
              <p className="mr-4">My tours</p>
              {isAdmin && (
                <p className="mr-4">Users</p>
              )}
              <Button muted onClick={() => signOut()}>Sign out</Button>
            </>
          ) : (
            <Link href='/signin' className="cursor-pointer">
              <Button>Sign in</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
