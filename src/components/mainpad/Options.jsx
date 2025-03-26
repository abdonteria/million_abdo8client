import SpecialBtn from "./SpecialBtn";

export default function Options() {
  return (
    <section className="">
      <div className="border p-10 rounded-2xl w-4/5 mx-auto grid grid-cols-2 gap-10">
        {[
          { title: "الخلية", hoverTitle: "أ" },
          { title: "المادة", hoverTitle: "ب" },
          { title: "الجزئ", hoverTitle: "ج" },
          { title: "الذرة", hoverTitle: "د" },
        ].map((ele, i) => (
          <div className="border-2 rounded-lg" key={i}>
            <SpecialBtn defaultTitle={ele.title} hoverTitle={ele.hoverTitle} />
          </div>
        ))}
      </div>
    </section>
  );
}
