import HeroSection from '@/components/HeroSection/HeroSection';
import OurServices from '@/components/OurServices/OurServices';
import ShopElectronics from '@/components/ShopElectronics/ShopElectronics';
import KoodoVendor from '@/components/KoodoVendor/KoodoVendor';
import ReadyToGetStarted from '@/components/ReadyToGetStarted/ReadyToGetStarted';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <ShopElectronics />
      <KoodoVendor />
      <ReadyToGetStarted />
      <Testimonials />
    </>
  );
}
