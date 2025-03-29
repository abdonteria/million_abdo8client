import { FiLoader } from "react-icons/fi";
import { PiPasswordLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const PasswordInput = ({ dispatch, state }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label>كلمة المرور:</label>
      <div className="flex items-center gap-3">
        <PiPasswordLight className="text-3xl sm:block hidden" />
        <div className="relative sm:w-[90%] w-full">
          <input
            type={isPasswordShown ? "text" : "password"}
            placeholder="أكتب كلمة مرور قوية هنا..."
            className={`border outline-none xl:w-[400px] w-full px-4 py-2 rounded-md text-lg`}
            onChange={(e) => {
              dispatch(e, "password");
            }}
            value={state}
          />
          <div
            className="absolute top-3 sm:left-[3%] left-[5%] xl:left-8 text-xl cursor-pointer"
            onClick={() => {
              setIsPasswordShown(!isPasswordShown);
            }}
          >
            {isPasswordShown ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap max-w-[500px] space-x-6 px-2 mt-2">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <FiLoader />
            <h2>يحتوي علي أحرف وأرقام</h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FiLoader />
            <h2>كلمة مرور مسوح بأستخدامها</h2>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 text-sm">
            <FiLoader />
            <h2>طول كلمة المرور ليس اقل من 8 احرف</h2>
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

export default PasswordInput;
