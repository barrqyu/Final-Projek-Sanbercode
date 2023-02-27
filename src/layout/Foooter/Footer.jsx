const Footer = () => {
  return (
    <div className=" bg-[#7286D3] mt-[20px] py-[20px] pl-[20px] pb-[60px] flex flex-col md:flex-row justify-evenly">
      <div className="md:mt-[20px] mt-0 ">
        <img src="images/Group 2.png" class="h-[50px] mr-1 inline mt-[-15px]" alt="Flowbite Logo" />
        <span className="self-center text-[30px] font-semibold whitespace-nowrap dark:text-white">Jobskuy</span>
      </div>
      <div className="mt-[25px]">
        <h1 className="text-[22px] text-white font-plusjktsans">Our Company</h1>
        <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 ml-[8px] mt-[10px]">
          <li className=" text-slate-300">About Jobskuy</li>
          <li className=" text-slate-300">Contact</li>
          <li className=" text-slate-300">Privacy Policy</li>
          <li className=" text-slate-300">Term & Condition</li>
        </ul>
      </div>
      <div className="mt-[25px]">
        <h1 className="text-[22px] text-white font-plusjktsans">Random Quotes</h1>
        <ul className="list-disc list-inside">
          <li className="text-slate-300">
            Excess on occasion is exhilarating.
            <br /> It prevents moderation from acquiring
            <br /> the deadening effect of a habit.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
