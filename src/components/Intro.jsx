import Image from "next/image";
import Card from "../components/Card";
import Input from "../components/Input";
import useGetTours from "../hooks/useGetTours";
import ToursGrid from "./ToursGrid";
import HeroImage from "/public/images/hero-image.jpg";

export default function Intro() {
  const { data: tours } = useGetTours()
  return (
    <>
      <div className="flex w-full mb-16 flex-col md:flex-row mt-[-1rem]">
        <div className="w-[20%] flex items-center z-10">
          <div className="w-full my-10 min-w-[300px]  p-9 rounded-md border-gray-100 border-[1px] shadow-lg bg-white">
            <h1 className="text-3xl font-bold text-center">Tour Guides!</h1>
            <p className="mt-4 text-gray-900">
              Want to go somewhere new and fun?
            </p>
            <div className="mt-4 w-full">
              <Input placeholder="Go somewhere fun?" />
            </div>
          </div>
        </div>
        <div className="md:w-[80%]">
          <div className="h-full w-full relative">
            <Image src={HeroImage} alt="Picture of the author" layout="fill" objectFit="cover" className="rounded-md shadow-sm" />
          </div>
        </div>
      </div>

      <ToursGrid count={4} />
    </>);
}
