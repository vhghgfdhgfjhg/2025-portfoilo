import { VelocityScroll } from '@/components/ui/scrollbasedvelocity';

export default function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      className="px-6 text-center text-4xl font-bold tracking-tight md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 "
      text="Welcome to My Portfolio"
      // default_velocity={5}
    />
  );
}
