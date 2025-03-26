export default function SpecialBtn({ defaultTitle, hoverTitle }) {
  return (
    <button className="overflow-hidden w-full p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group  hover:bg-white hover:text-black hover:border-black transition-all">
      {defaultTitle}
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-200 duration-1000 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-300 duration-700 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-400 duration-500 origin-left"></span>
      <span className="group-hover:opacity-100 group-hover:duration-100 group-hover:text-white duration-100 opacity-0 absolute top-2.5 left-6 z-10">
        {hoverTitle}
      </span>
    </button>
  );
}
