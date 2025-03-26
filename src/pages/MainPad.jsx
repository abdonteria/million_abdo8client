import { useEffect } from "react";
import Cards from "../components/mainpad/Cards";
import Helpers from "../components/mainpad/Helpers";
import Options from "../components/mainpad/Options";
import ProgressLine from "../components/mainpad/ProgressLine";
import axiosInstance from "../utils/axios";

export default function MainPad() {
  useEffect(() => {
    axiosInstance
      .get("/api/user/test")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="mx-auto border h-[88vh] rounded-b-2xl">
      <div className="flex flex-col justify-center h-full w-full gap-12">
        <ProgressLine />
        <section>
          <div className="border w-4/5 mx-auto text-4xl font-semibold py-6 px-8 rounded-xl text-center">
            ما هي الوحدة البنائية الاصغر للمادة ؟
          </div>
        </section>
        <Cards />
        <Helpers />
        <Options />
        <section></section>
      </div>
    </div>
  );
}
