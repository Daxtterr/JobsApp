const Card = ({time,type,Job,company,country}) => {
  return (
    <div>
      <div className="mx-auto bg-white px-5 py-5 h-40 rounded-md md:5/5 dark:bg-zinc-800">
        <span className="text-slate-500 text-sm">{time} .</span>
        <span className="text-slate-500 text-sm"> {type}</span>
        <br />
        <span className="font-bold dark:text-white">{Job}</span>
        <br />
        <span className="text-slate-500 text-sm">{company}</span>
        <br />
        <p className="text-blue-600 font-semibold text-sm mt-8">{country}</p>
      </div>
    </div>
  );
};

export default Card;
