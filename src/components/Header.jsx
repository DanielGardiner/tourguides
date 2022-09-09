import Button from "./Button";
import Image from "next/Image";
import TravelIcon from '/public/icons/travel-icon.svg'

export default function Header() {
  return (
    <div className="w-full flex justify-center bg-gray-100 border-b-2 border-gray-300">
      <div className="w-full max-w-4xl flex justify-between p-4">
        <div className="flex items-center">
          <Image src={TravelIcon} alt="Vercel Logo" width={40} height={40} />
        </div>
        <div className="flex items-center">
          <Button>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}
