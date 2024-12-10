import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { cn } from '@/libs/utils.ts';
import { Input } from '@/components/ui/input.tsx';

export default function Home() {
  return (
    <div className="relative flex h-full flex-col w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      <div className="flex flex-col space-y-5 justify-center items-center">
        <p className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white uppercase">
          Recherchez des summoners
        </p>
        <Input className="w-[30rem] h-14 " />
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
    </div>
  );
}
