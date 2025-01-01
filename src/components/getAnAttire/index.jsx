"use client";

import { GlobalState } from "@/stateManager/context";
import { useContext } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { GetAnAttireForm } from "./form";

const GetAnAttire = () => {
  const { state, dispatch } = useContext(GlobalState);
  const { getAnAttireOpen } = state;

  const closeGetAnAttire = () => {
    dispatch({ type: "CLOSE_GET_AN_ATTIRE", payload: false });
  };

  return (
    <div className="z-50">
      {getAnAttireOpen && (
        <div className="bg-black h-[100vh] z-[100] bg-opacity-20 w-[100vw] fixed flex justify-center items-center  px-3 py-5">
          <div className="bg-stone-50   rounded-lg lg:h-[70%] h-[80%] lg:w-[40%] w-full lg:p-8 p-3 flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-[1.5rem]">Get an Attire</h3>
              </div>

              <div>
                <button
                  onClick={closeGetAnAttire}
                  className="bg-black text-white rounded-full p-1"
                >
                  <FaRegTimesCircle className="" />
                </button>
              </div>
            </div>

            <div className="">
              <GetAnAttireForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetAnAttire;
