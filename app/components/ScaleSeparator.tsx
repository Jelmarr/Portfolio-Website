import { ScalesContainer } from "@/components/ui/scales";

const ScaleSeparator = () => {
  return (
    <div className="relative mt-12 h-6 w-full col-span-full mask-[linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
      <ScalesContainer containerClassName="h-full w-full" />
    </div>
  );
};

export default ScaleSeparator;
