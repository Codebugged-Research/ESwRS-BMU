import { UseRouter } from "next/router";
import React, { UseState, UseEffect } from "react";

export default function CardSettings() {
  const router = UseRouter();
  const { id } = router.query;

  const [number, setNumber] = UseState(0);
  const [type, setType] = UseState("");

  const fetchData = () => {
    fetch(`http://143.110.249.208:3000/api/coach/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setNumber(data.coachNumber);
        setType(data.coachtype);
      });
  };

  UseEffect(() => {
    fetchData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://143.110.249.208:3000/api/coach/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coachNumber: number,
        coachtype: type,
      }),
    }).then((data) => {
      if (data.status === 200) {
        window.confirm("Successfully!");
      } else {
        window.confirm("Failed");
      }
    });
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold"> Coaches </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={submitHandler}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Edit Coach
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Coach Number
                  </label>
                  <input
                    type="Number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Coach Type
                  </label>
                  <select
                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white :border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                  >
                    <option selected value="#">
                      Select Type
                    </option>

                    <option value="type1">Type-1</option>
                    <option value="type2">Type-2</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Add Coach
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
