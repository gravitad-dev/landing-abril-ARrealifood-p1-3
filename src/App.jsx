import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Build from "@/components/Build";
import HowBuild from "@/components/HowBuild";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Project from "@/components/Project";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center w-full overflow-hidden ">
      <div className="max-w-[1300px] w-full px-4 md:px-6 lg:px-4 xl:px-0 ">
        {children}
      </div>
    </div>
  );
};

function App() {
  //
  return (
    <main className="bg-[#302c42] min-h-[100vh]">
      <Header />

      <Layout>
        <Hero />
        <About />
        <Build />
        <Project />
        <Technologies />
        <HowBuild />
        <Contact />
        <Footer />
      </Layout>
    </main>
  );
}

export default App;
