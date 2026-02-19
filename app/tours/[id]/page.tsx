import React from "react";

interface TourProps {
	params: {
		id: string;
	}
}

const Tour = ({ params }: TourProps) => {
	const { id } = params;

	return <div className="mt-[150px] flex flex-col items-center">Tour</div>;
};

export default Tour;
