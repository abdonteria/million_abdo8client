import logo from "../../assets/svg/logo.png";

export default function AuthNavbar() {
  return (
    <div className="border-b border-white shadow-2xl">
      <nav className="flex items-center justify-between px-5 py-2">
        <section>
          <img src={logo} alt="logo image" className="w-15 h-15 bg-cover" />
        </section>
        <section className="flex items-center gap-5">
          <button
            className={`sm:border-2 py-2 px-3 rounded-md sm:text-md font-semibold cursor-pointer
              hover:bg-white hover:text-black border-white transition-all duration-150
              border-1 text-sm`}
          >
            إنشاء حساب
          </button>
          <button
            className={`sm:border-2 py-2 px-3 rounded-md sm:text-md font-semibold cursor-pointer text-sm border-1
            bg-white text-black border-white transition-all duration-150 hover:bg-black hover:text-white`}
          >
            تسجيل الدخول
          </button>
        </section>
      </nav>
    </div>
  );
}
