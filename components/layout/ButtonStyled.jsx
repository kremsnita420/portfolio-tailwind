export default function ButtonStyled({ title }) {
  return (
    <div className="">
      <div className="btn hover:scale-125 font-heading1 font-extrabold uppercase text-center btn-two">
        <span className="text-red-400 dark:text-blue-400 p-10">{title}</span>
      </div>
    </div>
  );
}
