import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../App";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Food", href: "/food" },
  { name: "Drink", href: "/drink" },
  { name: "Login", href: "/login",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  const [ loggin, setLoggin] = useContext(LoginContext);
  useEffect(()=> {
    console.log(loggin);
    setLoggin(false);
    console.log(loggin);
  })

  return (
    <>
      <Disclosure as="nav" className="bg-red-600">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="hidden h-12 w-auto lg:block"
                      src={require("../img/JoyfulBurgerLogo.webp")}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              "rounded-md px-3 py-2 font-medium no-underline text-1xl " +
                              (isActive
                                ? "bg-yellow-400 text-red-600  hover:text-red-600"
                                : " hover:bg-yellow-400 hover:text-red-600 text-white")
                            );
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return (
                        "rounded-md px-3 py-2 font-medium no-underline text-1xl w-full " +
                        (isActive
                          ? "bg-yellow-400 text-red-600  hover:text-red-600"
                          : " hover:bg-yellow-400 hover:text-red-600 text-white")
                      );
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="min-h-screen p-3">{props.children}</div>

      <footer>Hello world</footer>
    </>
  );
}
