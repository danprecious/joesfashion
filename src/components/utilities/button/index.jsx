const CustomButton = ({ children, text, fn }) => {
  return (
    <button
      onClick={fn}
      className="ml-2 text-xs flex py-3 px-6 items-center rounded-3x max-w-[13em] bg-black text-white cursor-pointer rounded-2x"
    >
      <span className="mr-1">{children}</span>
      {text}
    </button>
  );
};

export default CustomButton;
