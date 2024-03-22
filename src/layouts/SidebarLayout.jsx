import { Fragment, useState } from "react";
import { Dialog, Menu, Transition, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  ChevronRightIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
  MoonIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import DashIcon from "../icons/DashIcon";
import EquipIcon from "../icons/EquipIcons";
import ExitIcon from "../icons/ExitIcon";
import InventoryIcon from "../icons/InventoryIcon";
import MainIcon from "../icons/MainIcon";
import TaskIcon from "../icons/TaskIcon";
import TeamIcon from "../icons/TeamIcon";
import MaintainsIcon from "../icons/Maintains";
import UsersIcon from "../icons/Users";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import logo from "../assets/logo.png";
import { Switch } from "../components/switch";
import HealthIcon from "../icons/Health";
import TeamsIcon from "../icons/TeamsIcon";
const navigation = [
  {
    name: "Dashboard",
    href: "#",
    icon: <DashIcon />,
    current: true,
  },
  {
    name: "Users",
    href: "#",
    icon: <UsersIcon />,

    current: false,
    children: [
      { name: "User 1", href: "#" },
      { name: "User 2", href: "#  " },
    ],
  },
  {
    name: "Equipments",
    href: "#",
    icon: <EquipIcon />,
    current: false,
    children: [
      { name: "Add Equipment", href: "#" },
      { name: "Equipment", href: "/" },
      { name: "Live Equipment", href: "/live-equipment" },
      {
        name: "Multi Equipment",
        href: "/",
      },
    ],
  },
  {
    name: "Task Centers",
    href: "#",
    icon: <ClipboardDocumentCheckIcon className="w-6 h-6 text-gray-600" />,
    current: false,
    children: [
      { name: "Task Center 1", href: "#" },
      { name: "Task Center 2", href: "#" },
    ],
  },
  {
    name: "Maintains",
    href: "#",
    icon: <MaintainsIcon />,
    current: false,
    children: [
      { name: "Lunch Complaints", href: "#" },
      { name: "List of complaints", href: "#" },
      { name: "Maintenance Settings", href: "/maintenance" },
      { name: "Resolved Complaints", href: "#" },
      { name: "Pending Complaints", href: "#" },
      { name: "Complete Services", href: "#" },
      { name: "Pending Services", href: "#" },
      { name: "Update Service Report", href: "#" },
    ],
  },
  {
    name: "Health and Safety",
    href: "#",
    icon: <HealthIcon />,
    current: false,
    children: [
      { name: "Health and Safety 1", href: "#" },
      { name: "Health and Safety 2", href: "#" },
    ],
  },
  {
    name: "Team Resources",
    href: "#",
    icon: <TeamsIcon />,
    current: false,
    children: [
      { name: "Team 1", href: "#" },
      { name: "Team 2", href: "#" },
    ],
  },
  {
    name: "Inventory",
    href: "#",
    icon: <InventoryIcon />,
    current: false,
    children: [
      { name: "Inventory 1", href: "#" },
      { name: "Inventory 2", href: "#" },
    ],
  },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col px-6 pb-4 overflow-y-auto bg-white grow gap-y-5">
                    <div className="flex items-center h-16 shrink-0">
                      <img
                        className="w-auto h-8"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-col flex-1">
                      <ul role="list" className="flex flex-col flex-1 gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                {!item.children ? (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      item.current
                                        ? "bg-gray-50"
                                        : "hover:bg-gray-50",
                                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700"
                                    )}
                                  >
                                    {item.icon}
                                    {item.name}
                                  </a>
                                ) : (
                                  <Disclosure as="div">
                                    {({ open }) => (
                                      <>
                                        <Disclosure.Button
                                          className={classNames(
                                            item.current
                                              ? "bg-gray-50"
                                              : "hover:bg-gray-50",
                                            "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                                          )}
                                        >
                                          {item.icon}
                                          {item.name}
                                          <ChevronRightIcon
                                            className={classNames(
                                              open
                                                ? "rotate-90 text-gray-500"
                                                : "text-gray-400",
                                              "ml-auto h-5 w-5 shrink-0"
                                            )}
                                            aria-hidden="true"
                                          />
                                        </Disclosure.Button>
                                        <Disclosure.Panel
                                          as="ul"
                                          className="px-2 mt-1"
                                        >
                                          {item.children.map((subItem) => (
                                            <li key={subItem.name}>
                                              {/* 44px */}
                                              <Disclosure.Button
                                                as="a"
                                                href={subItem.href}
                                                className={classNames(
                                                  subItem.current
                                                    ? "bg-gray-50"
                                                    : "hover:bg-gray-50",
                                                  "block rounded-md py-2 pr-2 pl-2 text-sm leading-6 text-gray-700"
                                                )}
                                              >
                                                {subItem.name}
                                              </Disclosure.Button>
                                            </li>
                                          ))}
                                        </Disclosure.Panel>
                                      </>
                                    )}
                                  </Disclosure>
                                )}
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="mt-2 -mx-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "text-indigo-600 border-indigo-600"
                                        : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="flex p-2 -mx-2 text-sm font-semibold leading-6 text-gray-700 rounded-md group gap-x-3 hover:bg-gray-50 hover:text-indigo-600"
                          >
                            <Cog6ToothIcon
                              className="w-6 h-6 text-gray-400 shrink-0 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                        <li className="mt-auto">
                          <div className="flex p-2 -mx-2 text-sm font-semibold leading-6 text-gray-700 rounded-md group gap-x-3 hover:bg-gray-50 hover:text-indigo-600">
                            <Cog6ToothIcon
                              className="w-6 h-6 text-gray-400 shrink-0 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                            Settings
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col px-6 pb-4 overflow-y-auto bg-white border-r border-gray-200 grow gap-y-5">
            <div className="flex items-center h-16 shrink-0">
              <img className="w-auto h-8" src={logo} alt="Your Company" />
            </div>
            <nav className="flex flex-col flex-1">
              <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        {!item.children ? (
                          <a
                            href={item.href}
                            className={classNames(
                              item.current ? "bg-gray-50" : "hover:bg-gray-50",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700"
                            )}
                          >
                            {item.icon}
                            {item.name}
                          </a>
                        ) : (
                          <Disclosure as="div">
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50"
                                      : "hover:bg-gray-50",
                                    "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                                  )}
                                >
                                  {item.icon}
                                  {item.name}
                                  <ChevronRightIcon
                                    className={classNames(
                                      open
                                        ? "rotate-90 text-gray-500"
                                        : "text-gray-400",
                                      "ml-auto h-5 w-5 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel as="ul" className="px-2 mt-1">
                                  {item.children.map((subItem) => (
                                    <li key={subItem.name}>
                                      {/* 44px */}
                                      <Disclosure.Button
                                        as="a"
                                        href={subItem.href}
                                        className={classNames(
                                          subItem.current
                                            ? "bg-gray-50"
                                            : "hover:bg-gray-50",
                                          "flex items-center gap-4 rounded-md py-2 pr-2 pl-2 text-sm leading-6 text-gray-700"
                                        )}
                                      >
                                        <span className="inline">
                                          <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                                              fill="currentColor"
                                            ></path>
                                          </svg>
                                        </span>

                                        {subItem.name}
                                      </Disclosure.Button>
                                    </li>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <div className="flex justify-between p-2 -mx-2 text-sm font-semibold leading-6 text-gray-700 rounded-md group gap-x-3 hover:bg-gray-50 hover:text-indigo-600">
                    <div className="flex items-center gap-2">
                      <MoonIcon
                        className="w-6 h-6 text-gray-400 shrink-0 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                      Dark Mode
                    </div>
                    <div>
                      <Switch className={"bg-[#174172]"} color="blue" />
                    </div>
                  </div>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="flex p-2 -mx-2 text-sm font-semibold leading-6 text-gray-700 rounded-md group gap-x-3 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      className="w-6 h-6 text-gray-400 shrink-0 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex items-center h-16 px-4 bg-white border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="w-px h-6 bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex self-stretch flex-1 gap-x-4 lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="absolute inset-y-0 w-5 h-full text-gray-400 pointer-events-none left-4"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="hidden h-10 py-2 pl-10 pr-0 my-auto text-gray-900 border border-gray-200 rounded-md md:block min-w-72 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 relative border border-black/[10%] px-1.5 py-1.5 bg-[#F5F6FA] rounded-[10px] text-gray-400 hover:text-gray-500"
                >
                  <div className="absolute h-1.5 top-0 right-0 w-1.5 rounded-full bg-[#FF0000]">
                    {" "}
                  </div>
                  <span className="sr-only">View notifications</span>
                  <BellIcon
                    className="w-5 h-5 text-gray-700"
                    aria-hidden="true"
                  />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <span
                      className="mr-4 text-sm font-semibold leading-6 text-gray-900"
                      aria-hidden="true"
                    >
                      Hello Kashif
                    </span>
                    <img
                      className="w-8 h-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <ChevronDownIcon
                        className="ml-2 text-gray-800 h-7 w-7"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10 min-h-screen bg-[#F8F9FB]">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
