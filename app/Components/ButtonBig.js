function ButtonBig({ children, className, onClick, disabled }) {
  return (
    <button
      className={`${className} text-white xs:px-4 xs:py-2 md:py-4 sm:px-2 xs:text-sm sm:py-4 cxs:py-4 md:px-7${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonBig;
