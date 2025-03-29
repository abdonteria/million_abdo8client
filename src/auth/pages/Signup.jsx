import logo from "../../assets/svg/logo.png";
import UsernameInput from "../components/signup/UsernameInput";
import EmailInput from "../components/signup/EmailInput";
import PasswordInput from "../components/signup/PasswordInput";
import { useReducer, useState } from "react";

export default function Signup() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USERNAME":
        return {
          ...state,
          username: {
            value: action.payload.val,
            validate: action.payload.validate,
          },
        };
      case "SET_EMAIL":
        return {
          ...state,
          email: {
            value: action.payload,
            validate: state.email.validate,
          },
        };
      case "SET_PASSWORD":
        return {
          ...state,
          password: {
            value: action.payload,
            validate: state.password.validate,
          },
        };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };

  // it's should be this to avoid showing error if you put 'null' value for example
  const [state, dispatch] = useReducer(reducer, {
    username: { value: "", validate: false },
    email: { value: "", validate: false },
    password: { value: "", validate: false },
    error: "",
  });

  const handleDispatch = (event, field, checkResult) => {
    dispatch({
      type: `SET_${field.toUpperCase()}`,
      payload: { val: event.target.value, validate: checkResult },
    });
  };

  return (
    <div className="">
      <div className="container gap-12 xl:gap-0 flex xl:flex-row flex-col-reverse items-center justify-between my-5 mx-auto max-w-7xl">
        {/* First Section */}
        <section className="flex justify-center items-center xl:w-auto w-full">
          <form className="flex flex-col items-center px-10 py-8 border border-white rounded-md xl:w-auto md:w-[80%] w-full">
            <h1 className="text-xl font-bold mb-8">إنشاء حساب طالب</h1>
            {/* Input Field: USERNAME */}
            <UsernameInput
              state={state.username.value}
              dispatch={handleDispatch}
            />
            <hr className="text-white w-full my-7" />
            {/* Input Field: EMAIL */}
            <EmailInput state={state.email.value} dispatch={handleDispatch} />
            <hr className="text-white w-full my-7" />
            {/* Input Field: PASSWORD */}
            <PasswordInput
              state={state.password.value}
              dispatch={handleDispatch}
            />
            <hr className="text-white w-2/3 my-6" />

            {/* Form Submit Button */}
            <div className="w-full">
              <button
                type="submit"
                className="border w-full py-3 rounded-md cursor-pointer hover:bg-white hover:text-black font-bold transition-all duration-100"
              >
                تأكيد التسجيل
              </button>
            </div>
          </form>
        </section>

        {/* Divider */}
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
