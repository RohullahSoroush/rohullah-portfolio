import Layout from "@/components/layout/page";
import HeroSection from "@/components/sections/HeroSection";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div className="flex justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
