export default function Cards() {
  return (
    <section>
      <div className="w-4/5 mx-auto flex items-center gap-10">
        {[
          { title: "الوقت المتبقي", value: "00:05" },
          { title: "الصعوبة", value: "صعب" },
        ].map((ele, i) => (
          <div
            className="w-1/2 flex items-center justify-center border px-15 py-2 rounded-xl text-3xl font-semibold"
            key={i}
          >
            <h1 className="ml-10">{ele.title}:</h1>
            <span className="">{ele.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
