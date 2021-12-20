export default function Course({ date, link, title, platform, bootcamp }) {
  return (
    <a href={link} target="_blank" rel="noopener">
      <div
        className={
          bootcamp
            ? "font-black animate-scale-105 text-red-400 dark:text-blue-400 flex flex-col items-center justify-center glassmorph min-h-[10.5rem] rounded-lg p-5 hover:bg-blue-300 dark:hover:bg-red-400 hover:scale-105 transition-all"
            : "flex flex-col items-center justify-center glassmorph min-h-[10.5rem] rounded-lg px-5 hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105 transition-all"
        }
      >
        <p className="my-2 text-md">{date}</p>
        <h3 className=" uppercase my-2 realistic-marker-highlight text-center rotate-2 ">
          {title}
        </h3>
        <h4 className="rotate-[-2deg] my-2">{platform}</h4>
      </div>
    </a>
  );
}
