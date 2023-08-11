import elipsis from "../images/icon-ellipsis.svg";

const Card = ({ title, img, current, previous }) => {
  return (
    <div
      id={title}
      className="max-w-[300px] text-[--PaleBlue] rounded-lg h-full"
    >
      <div className={`${title} rounded-t-lg w-full flex justify-end`}>
        <img
          src={img}
          alt="/"
          className="h-[35px] w-[35px] translate-x-[-1rem]"
        />
      </div>
      <div className="bg-[var(--Darkblue)] h-[90%] w-full rounded-lg z-20 p-6 flex flex-col space-y-6">
        <div className="flex justify-between items-center text-white">
          <div className="title">{title}</div>
          <img src={elipsis} alt="/" className="w-[20px] h-[5px]" />
        </div>
        <div className="flex md:flex-col md:gap-3 justify-between items-center md:items-start">
          <h1 className="md:text-5xl text-2xl text-white font-[300]">
            {current}hrs
          </h1>
          <p className="md:text-sm text-sm ">
            LastWeek - <span>{previous}hrs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
