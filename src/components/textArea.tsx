const TextArea = ({ label }: { label: string }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="TextAreaname"
        className="block text-primary text-[19px] font-extrabold leading-6"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          name="inputname"
          rows={10}
          className="block w-full py-1.5 px-2 bg-[#EEEEEE] focus:outline-primary"
        />
      </div>
    </div>
  );
};

export default TextArea;
