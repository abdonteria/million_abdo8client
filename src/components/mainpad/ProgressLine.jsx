export default function ProgressLine() {
  const handleBoxes = () => {
    return Array.from({ length: 15 }, (_, i) => (
      <div key={i} className="border-b w-[50px] text-center py-2 text-xl">
        <h1>{i + 1}</h1> {/* إظهار الرقم بشكل صحيح */}
      </div>
    ));
  };

  return (
    <section className="mx-auto w-full flex justify-center items-center">
      <div className="flex gap-9 items-center justify-center">
        {handleBoxes()}
      </div>
    </section>
  );
}
