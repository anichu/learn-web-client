import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import lw from "../../../learn-web.png";
import { ImSun } from "react-icons/im";
import { HiMoon } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [dark, setDark] = useState(true);
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
											<Link
												to="/login"
												className=" px-3 py-2 rounded-md text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
											>
												Login
											</Link>
											<a
												href="#"
												className=" px-3 py-2 rounded-md text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
											>
												Register
											</a>
										</div>
									</div>
								</div>

								<div className="absolute inset-y-0 right-0 flex items-center  pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
												<span className="sr-only">Open user menu</span>
												<img
													className="h-8 w-8 rounded-full"
													src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt=""
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Your Profile
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Settings
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Sign out
														</a>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
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
								<a
									href="#"
									className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									Login
								</a>
								<a
									href="#"
									className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									Register
								</a>

								{/* {navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className={classNames(
											item.current
												? " text-white"
												: "text-gray-300 hover:bg-gray-700 hover:text-white",
											"block px-3 py-2 rounded-md text-base font-medium"
										)}
										aria-current={item.current ? "page" : undefined}
									>
										{item.name}
									</Disclosure.Button>
								))} */}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};

export default Header;
