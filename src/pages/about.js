import Image from "next/Image";
import FullPageWidth from "../components/FullPageWidth";
import HeroImage from "/public/images/pyramid-image.jpg";

export default function AboutPage() {
  return (
    <div className="w-full mt-[-2.75rem]">
      <div className="h-[400px] relative">
        <FullPageWidth>
          <Image src={HeroImage} alt="" layout="fill" objectFit="cover" />
        </FullPageWidth>
        <h1 className="text-3xl font-bold absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
          About Us
        </h1>
      </div>
      <div className="max-w-2xl mx-auto">
        <p className="mt-12 mb-8">
          Faucibus in ornare quam viverra orci sagittis eu volutpat. Volutpat ac
          tincidunt vitae semper quis lectus nulla. Semper viverra nam libero
          justo laoreet sit amet cursus. Pellentesque nec nam aliquam sem et.
          Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque
          habitant morbi. Amet volutpat consequat mauris nunc congue. Neque
          ornare aenean euismod elementum nisi quis eleifend quam adipiscing.
          Senectus et netus et malesuada. Quisque egestas diam in arcu cursus.
          Et leo duis ut diam quam. Urna nec tincidunt praesent semper feugiat
          nibh sed pulvinar proin. Metus aliquam eleifend mi in nulla posuere.
          Bibendum at varius vel pharetra vel turpis nunc eget lorem. Nulla
          porttitor massa id neque aliquam vestibulum morbi blandit. Non
          curabitur gravida arcu ac tortor dignissim convallis. Bibendum est
          ultricies integer quis auctor elit sed. Erat pellentesque adipiscing
          commodo elit at. Sit amet mauris commodo quis imperdiet.
        </p>
        <p className="my-8">
          Suspendisse sed nisi lacus sed viverra. Lobortis feugiat vivamus at
          augue eget. Id ornare arcu odio ut. At in tellus integer feugiat
          scelerisque. Aenean et tortor at risus viverra.
        </p>
        <p className="my-8">
          Donec et odio pellentesque diam volutpat commodo. Mattis enim ut
          tellus elementum sagittis. Dui ut ornare lectus sit amet est placerat
          in egestas. Tristique sollicitudin nibh sit amet commodo nulla. Donec
          pretium vulputate sapien nec sagittis. Et tortor at risus viverra. In
          pellentesque massa placerat duis ultricies lacus. Ante metus dictum at
          tempor commodo ullamcorper a. Arcu felis bibendum ut tristique et.
          Purus sit amet volutpat consequat mauris nunc congue nisi. Sagittis
          vitae et leo duis. Nisl pretium fusce id velit. Gravida rutrum quisque
          non tellus orci ac auctor augue.
        </p>
      </div>
    </div>
  );
}
