import TourCard from "@/components/pages/tours/TourCard";
import SectionTitle from "@/components/ui/SectionTitle";
import SubTitle from "@/components/ui/SubTitle";
import Link from "next/link";

const ToursPage = () => {
	return (
		<div className="my-[150px] flex flex-col items-center">
			<SectionTitle bgText='Tours List' title='Find Your Tour' />
			<SubTitle text='We offer a wide range of tours to suit your interests and budget. Browse our selection and find the perfect tour for you.' />
			<div className="mt-3">
				<Link href='/custom-tour' className="h-[37px] cursor-pointer px-[14] md:px-[24px] py-[8px] text-white text-[12px] md:text-[14px] font-bold bg-orange rounded-full shadow-md"> Customize a Tour </Link>
			</div>
			<div className="max-w-[1160px] w-full mt-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
						return (
							<TourCard key={item} />
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default ToursPage;
