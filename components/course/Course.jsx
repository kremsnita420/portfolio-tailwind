export default function Course({ date, link, title, platform, description }) {
  return (
    <a href={link} target="_blank" rel="noopener">
      <div
        className="
				flex flex-col items-start glassmorph min-h-[10.5rem] rounded-lg px-5
			     hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105 transition-all"
      >
        <p className="my-2 text-md">{date}</p>
        <h3 className="text-gray-500 dark:text-gray-800 uppercase my-2 realistic-marker-highlight">
          {title}
        </h3>
        <h4 className="text-gray-500 dark:text-gray-800 my-2">{platform}</h4>
      </div>
    </a>
  );
}
