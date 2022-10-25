import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import lw from "../../../learn-web.png";
import { ImSun } from "react-icons/im";
import { HiMoon } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserProvider";
import ReactTooltip from "react-tooltip";

const Header = () => {
	const [dark, setDark] = useState(true);
	const { user, logOut } = useContext(UserContext);
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div>
			<Disclosure as="nav" className="bg-gray-800">
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
										<div className="flex items-center">
											<img
												className="block h-10 rounded-full w-auto lg:hidden"
												src={lw}
												alt="Your Company"
											/>
											<span className="text-xl block lg:hidden text-white ml-1">
												LearnWeb
											</span>
										</div>

										<img
											className="hidden h-10 rounded-full  w-auto lg:block"
											src={lw}
											alt="Your Company"
										/>
										<span className="text-xl hidden text-white lg:block ml-1">
											LearnWeb
										</span>
									</div>
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex ml-10 space-x-4">
											<Link
												to="/"
												className=" bg-gray-900 px-3 py-2 rounded-md text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
											>
												Home
											</Link>
											<a
												href="#"
												className=" px-3 py-2 rounded-md text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
											>
												Courses
											</a>
											<a
												href="#"
												className=" px-3 py-2 rounded-md text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
											>
												Blog
											</a>
											<a
												href="#"
												className=" px-3 py-2 rounded-md text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
											>
												FAQ
											</a>
											{user && user?.uid && (
												<button
													onClick={logOut}
													className="bg-purple-600 px-5 text-white rounded-md"
												>
													logout
												</button>
											)}
										</div>
									</div>
								</div>

								<div className="absolute inset-y-0 right-0 flex items-center  pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									{/* Profile dropdown */}
									{user?.uid ? (
										<Menu as="div" className="relative ml-3">
											<div>
												<Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
													<span className="sr-only">Open user menu</span>
													<img
														data-tip
														data-for="registerTip"
														className="h-8 w-8 rounded-full"
														src={user.photoURL}
														alt=""
													/>
												</Menu.Button>
												<ReactTooltip
													id="registerTip"
													place="top"
													effect="solid"
												>
													{user.displayName}
												</ReactTooltip>
											</div>
										</Menu>
									) : (
										<Link
											to="/login"
											className=" px-3 py-2 rounded-md text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
										>
											Login
										</Link>
									)}

									<div className="ml-10 flex items-center  text-white">
										<button
											className="transition-all"
											onClick={() => setDark((prev) => !prev)}
										>
											{dark ? (
												<HiMoon className="h-6 w-6" />
											) : (
												<ImSun className="w-6 h-6" />
											)}
										</button>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 px-2 pt-2 pb-3">
								<a
									href="#"
									className=" bg-gray-900 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									Home
								</a>
								<a
									href="#"
									className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									Courses
								</a>
								<a
									href="#"
									className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									Blog
								</a>
								<a
									href="#"
									className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									FAQ
								</a>
								{user?.uid ? (
									<button
										onClick={logOut}
										className="bg-purple-600 block w-full px-5 py-2 text-white rounded-md"
									>
										logout
									</button>
								) : (
									<Link
										to="/login"
										className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
									>
										Login
									</Link>
								)}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};

export default Header;
