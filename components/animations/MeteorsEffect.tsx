import { Meteors } from "../magicui/meteors";

 function MeteorDemo({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative top-0 left-0 flex w-full h-full flex-col items-center justify-center overflow-hidden border-none -z-50">
      <Meteors number={30} />
      <div className="pointer-events-none whitespace-pre-wrap">
        {children}
      </div>
    </div>
  );
}
export default MeteorDemo
