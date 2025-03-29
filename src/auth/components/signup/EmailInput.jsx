import { FiLoader } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const EmailInput = ({ dispatch, state }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label>البريد الألكتروني:</label>
      <div className="flex items-center gap-3">
        <MdOutlineAlternateEmail className="text-3xl sm:block hidden" />
        <input
          type="email"
          placeholder="أكتب عنوان بريدك الألكتروني هنا مصحوباً ب @..."
          className={`border outline-none xl:w-[400px] sm:w-[90%] w-full px-4 py-2 rounded-md text-lg`}
          onChange={(e) => {
            dispatch(e, "email");
          }}
          value={state}
        />
      </div>
      <div className="flex flex-wrap max-w-[500px] space-x-6 px-2 mt-2">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <FiLoader />
            <h2>ليس بريداَ محجوزا</h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FiLoader />
            <h2>عنوان بريد مسوح بأستخدامه</h2>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 text-sm">
            <FiLoader />
            <h2>طول عنوان البريد من 5 الي 45 حرف</h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FiLoader />
            <h2>لا يحتوي علي أحرف غير مسموح بها</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInput;
