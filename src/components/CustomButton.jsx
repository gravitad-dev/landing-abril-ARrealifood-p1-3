function CustomButton({ style, text }) {
  return (
    <button
      className={
        style == "primary"
          ? "rounded-[40px]  px-[38px] py-[16px] font-semibold text-white border-2 border-white"
          : "rounded-[40px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-[38px] py-[16px] font-semibold"
      }
    >
      {text}
    </button>
  );
}

export default CustomButton;
