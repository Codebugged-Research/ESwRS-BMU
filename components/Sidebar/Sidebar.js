import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

import NotificationDropdown from "../../components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  var [collapse1, setCollapse1] = React.useState(false);
  var [collapse2, setCollapse2] = React.useState(false);
  var [collapse3, setCollapse3] = React.useState(false);
  var [collapse4, setCollapse4] = React.useState(false);
  var [collapse5, setCollapse5] = React.useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-blueGray-700 flex flex-wrap items-center justify-between relative md:w-72 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-blueGray-700 m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/admin/dashboard">
            <a
              href="#"
              className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              ESwRS-BMU
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href=""
                      className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      ESwRS-BMU
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            {/* <form rm className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-300 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form> */}
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href=""
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-home mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="#">
                  <a
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("#") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("equipment_configuration") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Equipment Configuration
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/user_configuration">
                  <a
                    href="/admin/user_configuration"
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/user_configuration") !==
                      -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i className={"fas fa-user mr-2 text-sm opacity-75"}></i>{" "}
                    User Configuration
                    {/* <i
                      className={
                        "pl-3 fas fa-caret-down mr-2 text-sm opacity-75"
                      }
                    ></i> */}
                  </a>
                </Link>

                {/* {collapse1 ? (
                  <ul>
                    <li className="items-center pl-4">
                      <Link href="/admin/user/adduser">
                        <a
                          href="#pablo"
                          className={
                            "text-xs py-3 font-bold block " +
                            (router.pathname.indexOf("/admin/user/adduser") !==
                            -1
                              ? "text-lightBlue-500 hover:text-lightBlue-600"
                              : "text-white hover:text-blueGray-300")
                          }
                        >
                          <i
                            className={
                              "fas fa-user-check mr-2 text-sm " +
                              (router.pathname.indexOf(
                                "/admin/user/adduser"
                              ) !== -1
                                ? "opacity-75"
                                : "text-blueGray-300")
                            }
                          ></i>{" "}
                          Add User
                        </a>
                      </Link>
                    </li>
                    <li className="items-center pl-4">
                      <Link href="/admin/user/manageuser">
                        <a
                          href="#pablo"
                          className={
                            "text-xs py-3 font-bold block " +
                            (router.pathname.indexOf(
                              "/admin/user/manageuser"
                            ) !== -1
                              ? "text-lightBlue-500 hover:text-lightBlue-600"
                              : "text-white hover:text-blueGray-300")
                          }
                        >
                          <i
                            className={
                              "fas fa-users mr-2 text-sm " +
                              (router.pathname.indexOf(
                                "/admin/user/manageuser"
                              ) !== -1
                                ? "opacity-75"
                                : "text-blueGray-300")
                            }
                          ></i>{" "}
                          Manager User
                        </a>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )} */}
              </li>
              <li className="items-center">
                <Link href="/admin/route_configuration">
                  <a
                    href="#"
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/route_configuration") !==
                      -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-road mr-2 text-sm " +
                        (router.pathname.indexOf(
                          "/admin/route_configuration"
                        ) !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Route Configuration
                    {/* <i
                      className={
                        "pl-3 fas fa-caret-down mr-2 text-sm opacity-75"
                      }
                    ></i> */}
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/rake_configuration">
                  <a
                    href="#"
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/rake_configuration") !==
                      -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf(
                          "/admin/rake_configuration"
                        ) !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Rake Configuration
                    {/* <i
                      className={
                        "pl-3 fas fa-caret-down mr-2 text-sm opacity-75"
                      }
                    ></i> */}
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/live_monitoring">
                  <a
                    href="#"
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/live_monitoring") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/live_monitoring") !==
                        -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Live Monitoring
                    {/* <i
                      className={
                        "pl-3 fas fa-caret-down mr-2 text-sm opacity-75"
                      }
                    ></i> */}
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/emergency_live_calls">
                  <a
                    href="#"
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf(
                        "/admin/emergency_live_calls"
                      ) !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf(
                          "/admin/emergency_live_calls"
                        ) !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Emergency Live Calls
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/notification">
                  <a
                    href="#"
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/notification") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/notification") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Notification &#38; Alerts
                    {/* <i
                      className={
                        "pl-3 fas fa-caret-down mr-2 text-sm opacity-75"
                      }
                    ></i> */}
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/station">
                  <a
                    href="#"
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/station") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/station") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>
                    Stations
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/coaches">
                  <a
                    href="#"
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/coaches") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/coaches") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>
                    Coaches
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/train">
                  <a
                    href="#"
                    className={
                      "text-s py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/train") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/train") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>
                    Trains
                  </a>
                </Link>
              </li>
              <li className="items-center" onClick={signOut}>
                <Link href="#">
                  <a
                    href="#"
                    className={
                      "text-s py-3 font-bold block text-white hover:text-blueGray-300"
                    }
                  >
                    <i
                      className={"fas fa-table mr-2 text-sm text-blueGray-300"}
                    ></i>{" "}
                    Logout
                  </a>
                </Link>
              </li>
            </ul>
            {/* Navigation */}
            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/landing">
                  <a
                    href="#pablo"
                    className="text-white hover:text-blueGray-300 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Landing Page
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/profile">
                  <a
                    href="#pablo"
                    className="text-white hover:text-blueGray-300 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Profile Page
                  </a>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}
