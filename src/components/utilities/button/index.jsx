

const CustomButton = ({ children, text }) => {
  return (
    <div className="flex py-3 px-8 items-center rounded-3x max-w-[13em] bg-black text-white cursor-pointer rounded-2x">
      {children}
      <button className="ml-2 text-xs">{text}</button>
    </div>
  );
};

export default CustomButton;
