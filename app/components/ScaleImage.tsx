import Scales from "@/components/ui/scales";
import Image from "next/image";

const ScaleImage = () => {
  return (
    <div className="relative flex w-fit shrink-0 items-center justify-center p-6 py-14 px-14">
      <div className="relative h-56 w-52 rounded-lg bg-gray-100 dark:bg-neutral-800/50">
        <div className="absolute inset-y-[-30%] -left-8 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="absolute inset-y-[-30%] -right-8 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="absolute inset-x-[-30%] -top-8 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="absolute inset-x-[-30%] -bottom-8 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="relative z-10 h-full w-full overflow-hidden rounded-md bg-white shadow-sm ring-1 shadow-black/10 ring-black/5 dark:bg-neutral-800">
          <Image
            fill
            src="/kld-picture.jpg"
            alt="Portrait"
            className="h-full w-full object-cover filter"
          />
        </div>
      </div>
    </div>
  );
};

export default ScaleImage;
