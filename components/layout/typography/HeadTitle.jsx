export default function Title({ title }) {
  return (
    <div>
      <h1 className="font-heading1 backface text-3xl md:text-4xl text-center py-1 p-2 head-title relative font-black xl:text-5xl my-20">
        {title}
      </h1>
    </div>
  );
}
