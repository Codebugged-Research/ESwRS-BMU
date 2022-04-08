import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default function RouteTable({ color }) {
  const [routes, setRoutes] = useState([]);

  const fetchData = () => {
    fetch("http://143.110.249.208:3000/api/route")
      .then((response) => response.json())
      .then((data) => setRoutes(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "1rem" }}>
      <div
        style={{ padding: "1rem" }}
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Route Configuration
              </h3>
              <Link href="/admin/add_route">
                <a>
                  <button className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                    + Add Route
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Route Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Route Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Train
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Source
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Destination
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Stations
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {routes.length > 0
                ? routes.map((route) => (
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light"
                              ? "text-blueGray-600"
                              : "text-white")
                          }
                        >
                          {route.routeNumber}
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {route.routeName}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {route.train}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex">{route.source}</div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          {route.destination}
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">{route.station}</div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <div className="flex items-center">
                          <Link href={`/admin/edit_route?id=${route._id}`}>
                            <a>Edit</a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

RouteTable.defaultProps = {
  color: "light",
};

RouteTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
