import FloatingMeta from "@/components/FloatingMeta";
import Hero from "../pages/Hero";

export default function Home() {
  return (
    <main className= "w-screen" style={{
      backgroundImage: `url(img.png)`,
      backgroundSize: '70% 65%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 10%'
    }}>
      <Hero/>
      {/* <FloatingMeta/> */}
    </main>
  );
}