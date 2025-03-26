export default function Header() {
  return (
    <div className="w-full py-3">
      <nav className="border mx-auto py-4 px-5 rounded-t-lg flex items-center justify-between">
        <section className="">
          <div
            className={`flex items-center gap-3 text-2xl font-bold flex-row-reverse`}
          >
            <span
              className={`bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600
              bg-clip-text tracking-tight text-transparent`}
            >
              200,000,000$
            </span>
            <h1>المبلغ:</h1>
          </div>
        </section>
        <section>
          <div
            className={`flex items-center gap-3 text-2xl font-bold flex-row-reverse`}
          >
            <span
              className={`bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600
              bg-clip-text tracking-tight text-transparent`}
            >
              سهل
            </span>
            <h1>النوع:</h1>
          </div>
        </section>
        <section>
          <div
            className={`flex items-center gap-3 text-2xl font-bold flex-row-reverse`}
          >
            <span
              className={`bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
              bg-clip-text tracking-tight text-transparent`}
            >
              العلوم, 1ث
            </span>
            <h1>المادة:</h1>
          </div>
        </section>
      </nav>
    </div>
  );
}
