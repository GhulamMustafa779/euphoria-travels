import Hero from '@/components/pages/home/Hero'
import DreamDestinations from '@/components/pages/home/DreamDestinations';
import FindYourTour from '@/components/pages/home/FindYourTour';
import TravelWithUs from '@/components/pages/home/TravelWithUs';
import Testimonials from '@/components/pages/home/Testimonials';
import CallToAction from '@/components/pages/home/CallToAction';
import FAQs from '@/components/pages/home/FAQs';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen items-center">
			<Hero />
			<DreamDestinations />
			<FindYourTour />
			<TravelWithUs />
			<Testimonials />
			<FAQs />
			<CallToAction />
		</div>
	);
}
