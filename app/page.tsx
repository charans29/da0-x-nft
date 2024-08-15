import Hero from "../pages/Hero";

export default function Home() {
  return (
    <main className= "w-screen" style={{
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) -100%, black 90%), url(img.png)`,
      backgroundSize: '70% 65%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 10%'
    }}>
      <Hero/>
    </main>
  );
}
