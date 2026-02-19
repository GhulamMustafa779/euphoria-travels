
interface TagProps {
    text: string;
    onClick: (tag: string) => void;
    active: boolean;
}

const Tag = ({ text, onClick, active }: TagProps) => {
    return (
        <div onClick={() => { onClick(text) }} className={`h-[37px] px-[24px] py-[8px] font-bold text-[14px] ${active ? 'bg-indigo' : 'bg-indigo/15'} rounded-full cursor-pointer`}>
            <p className={`${active ? 'text-white' : 'text-indigo'}`}>
                {text}
            </p>
        </div>
    )
}

export default Tag