import Button from "@/components/ui/Button";
import PdfViewer from "@/components/ui/PdfViewer";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
interface TourProps {
	params: Promise<{
		id: string;
	}>
}

const tourDetails = [
	{
		title: "Duration",
		value: "10 Days"
	},
	{
		title: "Travel Style",
		value: "Sight Seeing"
	},
	{
		title: "Preffered Time",
		value: "Mid May"
	},
	{
		title: "Travel",
		value: "By Road"
	},
]

const galleryImages = [
	{
		image: "/images/ayyun.jpeg",
		alt: "Tour"
	},
	{
		image: "/images/attabad.jpeg",
		alt: "Tour"
	},
	{
		image: "/images/backdrop.jpeg",
		alt: "Tour"
	},
]

const TourDetails = ({ title, value }: { title: string, value: string }) => {
	return (
		<div className="bg-pine/10 rounded-[30px] p-[20px] flex-1 min-w-[250px]">
			<h5 className="text-[12px] md:text-[16px] font-helvetica font-medium text-orange">{title}</h5>
			<h3 className="text-[20px] md:text-[24px] font-helvetica font-medium text-indigo">{value}</h3>
		</div>
	)
}

const Tour = async ({ params }: TourProps) => {
	const { id } = await params;

	return (
		<div className="flex flex-col items-center overflow-x-hidden">
			<div className="relative flex flex-col items-center justify-center gap-4 w-full mt-[85px] h-[600px] rounded-b-[30px] overflow-hidden">
				<div className="absolute z-10 flex flex-col items-center justify-center gap-2 text-white w-full">
					<h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-bold font-inter text-center">
						Chilam Joshi<br />
					</h1>
					<p className="text-[16px] md:text-[20px] lg:text-[24px] font-helvetica font-medium text-center">
						(Chilim Jusht) Festival Kailash valley and Chitral
					</p>
				</div>
				<Image src="/images/ayyun.jpeg" alt="Tour" width={1160} height={700} className="absolute top-0 left-0 z-0 w-full max-h-[700px] object-cover" />
			</div>
			<div className="my-[50px] flex flex-col items-center gap-[100px] max-w-[1160px] w-full  p-[10px] md:p-[20px]">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-wrap justify-center">
					{
						tourDetails.map((detail) => (
							<TourDetails key={detail.title} title={detail.title} value={detail.value} />
						))
					}
				</div>

				<div className="flex flex-col md:flex-row gap-10 w-full">
					<div className="w-full md:w-1/2">
						<h2 className="mb-4 text-[20px] md:text-[24px] font-bold text-indigo font-helvetica text-left">
							About This Tour
						</h2>
						<p className="text-[16px] text-indigo font-helvetica text-left leading-7 tracking-wide text-justify">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vehicula arcu, vitae feugiat ligula. Duis tincidunt aliquam dapibus. Nullam nulla leo, tincidunt sed auctor ut, sagittis eu lorem. Vivamus dignissim auctor iaculis. Vivamus auctor pharetra urna, sed pulvinar ante placerat sit amet. Sed at tortor ligula. Fusce suscipit quam eu consectetur convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vehicula arcu, vitae feugiat ligula. Duis tincidunt aliquam dapibus. Nullam nulla leo, tincidunt sed auctor ut, sagittis eu lorem. Vivamus dignissim auctor iaculis. Vivamus auctor pharetra urna, sed pulvinar ante placerat sit amet. Sed at tortor ligula. Fusce suscipit quam eu consectetur convallis.
						</p>
					</div>

					<div className="w-full md:w-1/2">
						<Image src="/images/ayyun.jpeg" alt="Tour" width={500} height={500} className="w-full h-[400px] object-cover rounded-[24px]" />
					</div>
				</div>

				<div className="w-full">
					<h2 className="mb-4 text-[20px] md:text-[24px] font-bold text-indigo font-helvetica text-left">
						Highlights
					</h2>
					<ul className="list-disc list-inside text-[16px] text-indigo font-helvetica text-left space-y-4 list-none">
						<li><CheckCircle className="w-4 h-4 inline-block mr-2 text-green-500" />  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vehicula arcu</li>
						<li><CheckCircle className="w-4 h-4 inline-block mr-2 text-green-500" />  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vehicula arcu</li>
						<li><CheckCircle className="w-4 h-4 inline-block mr-2 text-green-500" />  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vehicula arcu, vitae feugiat ligula.</li>
						<li><CheckCircle className="w-4 h-4 inline-block mr-2 text-green-500" />  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus</li>
					</ul>
				</div>

				<div className="w-full">
					<h2 className="mb-4 text-[20px] md:text-[24px] font-bold text-indigo font-helvetica text-left">
						Gallery
					</h2>
					<div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
						{
							galleryImages.map((image, index) => (
								<Image key={index} src={image.image} alt={image.alt} width={300} height={400} className="h-[250px] min-w-[300px] w-full object-cover rounded-[24px]" />
							))
						}
					</div>
				</div>
				{/* Button to open PDF in viewer */}
				<div className="flex flex-col items-center justify-center gap-4">
					<p className="text-[16px] text-indigo font-helvetica text-left leading-7 tracking-wide text-justify mb-4">Don't miss out! Make sure to download and read the full itinerary PDF before booking your adventure. It has all the details you need for a perfect trip!</p>
					<PdfViewer pdfUrl="https://drive.google.com/file/d/1et7spY4jVaQbCOfP6H12q2lKJb7FpFZb/view?usp=sharing" label="Download Tour Itinerary (PDF)" viewer="browser" />
				</div>
			</div>
		</div>
	);
};

export default Tour;
