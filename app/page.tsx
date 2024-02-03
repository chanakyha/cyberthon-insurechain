import Image from "next/image";

export default function Home() {
  return (
    <div className="container-fix flex items-center min-h-[calc(100vh-18.7rem)]">
      <div className="flex items-center gap-8 justify-between">
        <Image
          src={"/assets/images/stock-1.png"}
          width={1920}
          height={1080}
          alt="stock-image"
          className="w-96 h-96"
        />
        <p className="text-justify">
          Nostrud dolor est dolor ipsum. Enim velit veniam esse labore culpa
          consectetur incididunt deserunt dolore. Do non deserunt enim ex eu
          dolore eiusmod eu nostrud incididunt. Sit et quis id enim adipisicing
          deserunt incididunt aute eiusmod aliquip cillum consectetur
          pariatur.Nostrud dolor est dolor ipsum. Enim velit veniam esse labore
          culpa consectetur incididunt deserunt dolore. Do non deserunt enim ex
          eu dolore eiusmod eu nostrud incididunt. Sit et quis id enim
          adipisicing deserunt incididunt aute eiusmod aliquip cillum
          consectetur pariatur.Nostrud dolor est dolor ipsum. Enim velit veniam
          esse labore culpa consectetur incididunt deserunt dolore. Do non
          deserunt enim ex eu dolore eiusmod eu nostrud incididunt. Sit et quis
          id enim adipisicing deserunt incididunt aute eiusmod aliquip cillum
          consectetur pariatur.Nostrud dolor est dolor ipsum. Enim velit veniam
          esse labore culpa consectetur incididunt deserunt dolore. Do non
          deserunt enim ex eu dolore eiusmod eu nostrud incididunt. Sit et quis
          id enim adipisicing deserunt incididunt aute eiusmod aliquip cillum
          consectetur pariatur.Nostrud dolor est dolor ipsum. Enim velit veniam
          esse labore culpa consectetur incididunt deserunt dolore. Do non
          deserunt enim ex eu dolore eiusmod eu nostrud incididunt. Sit et quis
          id enim adipisicing deserunt incididunt aute eiusmod aliquip cillum
          consectetur pariatur.
        </p>
      </div>
    </div>
  );
}
