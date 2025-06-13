interface ButtonProps {
  label: string;
  path: string;
}

const Button = ({ label, path }: ButtonProps) => {
  return (
    <div
      tabIndex={0}
      className="
        border border-[#eaeaea]
        bg-white
        text-[#505050]
        text-[14.2px]
        font-bold
        rounded-full
        p-[14.5px]
        pb-[12px]
        flex justify-center items-center
        gap-3
        cursor-pointer
        outline-none
        transition-colors duration-150 ease-in-out
        hover:border-[#b1b1b1] hover:text-black
        active:bg-[#b1b1b12e]
      "
    >
      <img src={`${path}`} className="h-[28px] w-[28px]" alt={`${label} Icon`} />
      <h2 className="tracking-tight">Continue with {label}</h2>
    </div>
  );
};

export default Button;
