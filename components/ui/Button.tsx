import ButtonTypeEnum from "@/enum/button-type.enum";

interface ButtonProps {
	width?: string | number;
	height?: string | number;
	backgroudColor?: string;
	textColor?: string;
	hoverColor?: string;
	activeColor?: string;
	fontSize?: string;
	sm?: boolean;
	md?: boolean;
	lg?: boolean;
	type?: ButtonTypeEnum;
}

const Button = ({
	width,
	height,
	backgroudColor,
	textColor,
	hoverColor,
	activeColor,
	fontSize,
	type = ButtonTypeEnum.BUTTON,
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={`w-[${width}] h-[${height}] bg-[${backgroudColor}] text-[${textColor} hover:bg-[${hoverColor}] hover:text-[${activeColor}] text-[${fontSize}]]`}
		></button>
	);
};

export default Button;
