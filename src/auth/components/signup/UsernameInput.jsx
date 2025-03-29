import { FiLoader } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { useEffect, useReducer } from "react";
import axiosInstance from "../../../utils/axios";
import { HiOutlineXMark } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";

export default function UsernameInput({ dispatch, state }) {
  const checkReducer = (state, action) => {
    switch (action.type) {
      case "CHECK_DB": {
        return { ...state, dbCheck: action.payload };
      }
      case "CHECK_KEYWORD": {
        return { ...state, keywordsCheck: action.payload };
      }
      case "CHECK_LENGTH": {
        return { ...state, lengthCheck: action.payload };
      }
      case "CHECK_SYMBOL": {
        return { ...state, symbolCheck: action.payload };
      }
    }
  };
  const [usernameCheckState, usernameCheckDispatch] = useReducer(checkReducer, {
    dbCheck: "",
    keywordsCheck: "unknown",
    lengthCheck: "unknown",
    symbolCheck: "unknown",
  });

  useEffect(() => {
    // you should send data as object
    axiosInstance
      .post("/api/auth/check-username", { username: state })
      .then((response) =>
        usernameCheckDispatch({
          type: "CHECK_DB",
          payload: response.data.found,
        })
      )
      .catch((error) => console.error(error));
    checkState(state);
  }, [state]);

  function checkState(current) {
    let finalResult = {
      db: false,
      keyword: false,
      length: false,
      symbol: false,
    };

    if (typeof current === "string") {
      if (!usernameCheckState.dbCheck) {
        finalResult.db = true;
      } else {
        finalResult.db = false;
      }
      if (state.length >= 5 && state.length <= 35) {
        finalResult.length = true;
        usernameCheckDispatch({
          type: "CHECK_LENGTH",
          payload: true,
        });
      } else {
        finalResult.length = false;
        usernameCheckDispatch({
          type: "CHECK_LENGTH",
          payload: false,
        });
      }
    }
  }

  function checkAlter(prop) {
    if (state) {
      if (prop) {
        return "r";
      } else {
        return "x";
      }
    } else {
      return "l";
    }
  }

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
          minLength={6}
          maxLength={35}
          placeholder="أكتب اسمك هنا..."
          className={`border outline-none xl:w-[400px] sm:w-[90%] w-full px-4 py-2 rounded-md text-lg`}
          onChange={(e) => {
            dispatch(e, "username", checkState(state));
          }}
          value={state}
        />
      </div>
      <div className="flex flex-wrap xl:max-w-[500px] max-w-[90%] space-x-6 px-2 mt-2">
        <div>
          {[
            {
              falseP: <h2>هذا الأسم محجوز بالفعل</h2>,
              trueP: <h2>ليس اسماً محجوزا</h2>,
              prop: !usernameCheckState.dbCheck,
            },
            {
              trueP: <h2>طول الاسم من 5 الي 35 حرف</h2>,
              falseP: <h2>يجب ان يكون طول الاسم من 5 الي 35 حرف</h2>,
              prop: usernameCheckState.lengthCheck,
            },
            // {
            //   h1: <h2>هذا الأسم محجوز بالفعل</h2>,
            //   h2: <h2>ليس اسماً محجوزا</h2>,
            //   prop: usernameCheckState.dbCheck,
            // },
            // {
            //   h1: <h2>هذا الأسم محجوز بالفعل</h2>,
            //   h2: <h2>ليس اسماً محجوزا</h2>,
            //   prop: usernameCheckState.dbCheck,
            // },
          ].map((ele, i) => (
            <div
              className={`flex items-center gap-2 text-sm 
              ${checkAlter(ele.prop) === "r" && "text-green-600"}
              ${checkAlter(ele.prop) === "x" && "text-red-600"}
              ${checkAlter(ele.prop) === "l" && ""}
            `}
            >
              {checkAlter(ele.prop) === "r" && <FaCheck />}
              {checkAlter(ele.prop) === "x" && <HiOutlineXMark />}
              {checkAlter(ele.prop) === "l" && <FiLoader />}
              {checkAlter(ele.prop) === "x" ? ele.falseP : ele.trueP}
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center gap-2 text-sm">
            <FiLoader />
            <h2>اسم مسوح بأستخدامه</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-nowrap">
            <FiLoader />
            <h2>لا يحتوي علي أحرف غير مسموح بها</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
