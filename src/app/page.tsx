import HeroSection from "@/components/sections/HeroSection";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
    </div>
  );
};

// Home.getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>;
// };

export default Home;
