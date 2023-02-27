import Footer from "../layout/Foooter/Footer";
import Hero from "../layout/Hero/hero";
import SectionContent from "../layout/Section Content/SectionContent";
const LandingPage = () => {
  return (
    <>
      <div className="bg-[#FFF2F2]">
        {/* hero section */}
        <Hero />
        {/* end hero section */}
        {/* Section Content */}
        <SectionContent />
        {/* end Section Content */}
        {/* footer */}
        <Footer />
        {/* endFoooter */}
      </div>
    </>
  );
};

export default LandingPage;
