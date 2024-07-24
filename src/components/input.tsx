const Input = ({ label }: { label: string }) => {
  return (
    <div className="w-full mb-7">
      <label
        htmlFor="inputname"
        className="block text-primary text-[19px] font-extrabold leading-6"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="inputname"
          className="block w-full h-[46.48px] py-1.5 px-2 bg-[#EEEEEE] focus:outline-primary"
        />
      </div>
    </div>
  );
};

export default Input;
