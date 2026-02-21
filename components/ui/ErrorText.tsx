
interface ErrorTextProps {
    text: string;
    fontSize?: string;
}

const ErrorText = ({ text, fontSize = '12px' }: ErrorTextProps) => {
    return (
        <div className={`text-red-500 text-[${fontSize}] ml-3`}>{text}</div>
    )
}

export default ErrorText