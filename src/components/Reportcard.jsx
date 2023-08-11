import img from "../images/image-jeremy.png";

const Reportcard = () => {
  return (
    <div className="bg-[var(--Darkblue)] rounded-lg max-w-[300px] md:row-start-1 md:row-end-3">
      <div className="h-[70%] w-full bg-[var(--Blue)] p-6 md:space-y-6 rounded-lg flex md:flex-col md:items-start items-center space-x-4">
        <img
          src={img}
          alt="/"
          className="w-[70px] h-[70px] border-2 rounded-full border-white"
        />
        <div className="info flex flex-col md:items-start">
          <p className="text-[var(--PaleBlue)] md:text-sm text-xs">
            Report for
          </p>
          <h1 className="text-[var(--PaleBlue)] md:text-3xl text-xl">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="bg-[var(--Darkblue)] p-6 w-full rounded-b-lg text-[var(--Desaturated-blue)] flex md:flex-col md:gap-2 justify-between">
        <p className="hover:text-[var(--PaleBlue)] cursor-pointer">Daily</p>
        <p className="hover:text-[var(--PaleBlue)] cursor-pointer">Weekly</p>
        <p className="hover:text-[var(--PaleBlue)] cursor-pointer">Monthly</p>
      </div>
    </div>
  );
};

export default Reportcard;
