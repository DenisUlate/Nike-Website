const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button
      className={`group overflow-hidden flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-coral-red hover:border-coral-red hover:text-white `
          : "bg-coral-red text-white border-coral-red hover:bg-black hover:border-black transition duration-300 ease-in-out "
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5 translate-x-[100px] group-hover:translate-x-[0] transition duration-500 ease-in-out"
        />
      )}
    </button>
  );
};

export default Button;
