import { MdOutlinePhoneEnabled } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FiDelete } from "react-icons/fi";

export default function Helpers() {
  return (
    <section>
      <div className="w-4/5 mx-auto flex items-center gap-10">
        {[
          {
            title: "الإتصال بصديق",
            action: () => {
              console.log("contact");
            },
            icon: <MdOutlinePhoneEnabled />,
          },
          {
            title: "تصويت الجمهور",
            action: () => {
              console.log("vote");
            },
            icon: <LuUsers />,
          },
          {
            title: "حذف إجابتين",
            action: () => {
              console.log("delete");
            },
            icon: <FiDelete />,
          },
        ].map((ele, i) => (
          <div
            className={`w-1/2 flex items-center justify-between border-2 cursor-pointer px-15 py-3 rounded-xl text-3xl
              hover:bg-white hover:text-black hover:border-black transition-all font-bold hover:translate-y-[-10px]`}
            key={i}
            onClick={ele.action}
          >
            <h1 className="text-center">{ele.title}</h1>
            {ele.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
