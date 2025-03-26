import logo from "../../assets/svg/logo.png";
import { FiLoader } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPasswordLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa6";

export default function Signup() {
  const UsernameInput = () => {
    return (
      // Parent / Input Field
      <div className="flex flex-col gap-2 w-full ">
        {/* Input Label */}
        <label>اسم الطالب:</label>
        {/*
          - Input
          - his Icon
        */}
        <div className="flex items-center gap-3">
          {/* Icon */}
          <CiUser className="text-3xl sm:block hidden" />
          {/* Input */}
          <input
            type="text"
            placeholder="أكتب اسمك هنا..."
            className={`border outline-none xl:w-[400px] sm:w-[90%] w-full px-4 py-2 rounded-md text-lg`}
          />
        </div>
        <div className="flex flex-wrap xl:max-w-[500px] max-w-[90%] space-x-6 px-2 mt-2">
          <div>
            <div className="flex items-center gap-2 text-sm">
              <FiLoader />
              <h2>ليس اسما محجوزا</h2>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FiLoader />
              <h2>اسم مسوح بأستخدامه</h2>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm">
              <FiLoader />
              <h2>طول الاسم من 5 الي 35 حرف</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-nowrap">
              <FiLoader />
              <h2>لا يحتوي علي أحرف غير مسموح بها</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EmailInput = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label>البريد الألكتروني:</label>
        <div className="flex items-center gap-3">
          <MdOutlineAlternateEmail className="text-3xl sm:block hidden" />
          <input
            type="email"
            placeholder="أكتب عنوان بريدك الألكتروني هنا مصحوباً ب @..."
            className={`border outline-none xl:w-[400px] sm:w-[90%] w-full px-4 py-2 rounded-md text-lg`}
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

  const PasswordInput = () => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label>كلمة المرور:</label>
        <div className="flex items-center gap-3">
          <PiPasswordLight className="text-3xl sm:block hidden" />
          <div className="relative sm:w-[90%] w-full">
            <input
              type="password"
              placeholder="أكتب كلمة مرور قوية هنا..."
              className={`border outline-none xl:w-[400px] w-full px-4 py-2 rounded-md text-lg`}
            />
            <FaRegEye className="absolute top-3 sm:left-[3%] left-[5%] xl:left-8 text-xl cursor-pointer" />
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

  return (
    <div className="">
      <div className="container gap-12 xl:gap-0 flex xl:flex-row flex-col-reverse items-center justify-between my-5 mx-auto max-w-7xl">
        {/* First Section */}
        <section className="flex justify-center items-center xl:w-auto w-full">
          <form className="flex flex-col items-center px-10 py-8 border border-white rounded-md xl:w-auto md:w-[80%] w-full">
            <h1 className="text-xl font-bold mb-8">إنشاء حساب طالب</h1>
            {/* Input Field: USERNAME */}
            <UsernameInput />
            <hr className="text-white w-full my-7" />
            {/* Input Field: EMAIL */}
            <EmailInput />
            <hr className="text-white w-full my-7" />
            {/* Input Field: PASSWORD */}
            <PasswordInput />
            <hr className="text-white w-2/3 my-6" />
            {/* Form Submit Button */}
            <div className="w-full">
              <button className="border w-full py-3 rounded-md cursor-pointer hover:bg-white hover:text-black font-bold transition-all duration-100">
                تأكيد التسجيل
              </button>
            </div>
          </form>
        </section>

        {/* Divider*/}
        <div className="border h-[55vh] xl:block hidden"></div>

        {/* Sec Section */}
        <section>
          <div className="flex items-center justify-center gap-5">
            <span
              className="md:text-8xl text-6xl"
              style={{ fontFamily: "var(--pixel-font)" }}
            >
              Third Term 3
            </span>
            <img
              src={logo}
              alt="logo image"
              className="md:w-22 w-15 md:h-22 h-15 sm:block hidden bg-cover"
            />
          </div>
          <div>
            <p className="mt-3 md:text-xl sm:text-lg text-sm leading-8 text-center sm:text-right xl:max-w-xl md:max-w-md max-w-sm">
              منصة تعليمية تفاعلية تتيح للمعلمين والطلاب التفاعل مع بعضهم في
              بيئة مبسطة ومهيئة لنقل العلم وتبادل الخبرات
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
