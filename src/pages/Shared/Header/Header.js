import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu } from "@headlessui/react";
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

	return (
		<div>
			<Disclosure as="nav" className="bg-gray-800">
				{({ open }) => (
					<>
						<div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
							<div className="relative flex items-center justify-between h-16">
								<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block w-6 h-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block w-6 h-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
									<div className="flex items-center flex-shrink-0">
										<div className="flex items-center">
											<img
												className="block w-auto h-10 rounded-full lg:hidden"
												src={lw}
												alt="Your Company"
											/>
											<span className="block ml-1 text-xl text-white lg:hidden">
												LearnWeb
											</span>
										</div>

										<img
											className="hidden w-auto h-10 rounded-full lg:block"
											src={lw}
											alt="Your Company"
										/>
										<span className="hidden ml-1 text-xl text-white lg:block">
											LearnWeb
										</span>
									</div>
									<div className="hidden sm:ml-6 md:block">
										<div className="flex ml-0 space-x-4 sm:ml-5 lg:ml-10 ">
											<Link
												to="/"
												className="px-3 py-2 text-sm font-medium text-gray-300 bg-gray-900 rounded-md hover:bg-gray-700 hover:text-white"
											>
												Home
											</Link>
											<Link
												to="/courses"
												className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
											>
												Courses
											</Link>
											<Link
												to="/blog"
												className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
											>
												Blog
											</Link>
											<Link
												to="/faq"
												className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
											>
												FAQ
											</Link>
											{user && user?.uid && (
												<>
													<button
														onClick={logOut}
														className="px-5 text-white bg-purple-600 rounded-md"
													>
														logout
													</button>
												</>
											)}
										</div>
									</div>
								</div>

								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									{/**/}

									{/* Profile dropdown */}
									{user?.uid ? (
										<Menu as="div" className="relative ml-3">
											<div>
												<Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
													<span className="sr-only">Open user menu</span>

													<img
														data-tip
														src={user?.photoURL}
														data-for="registerTip"
														className="w-8 h-8 rounded-full"
														alt=""
													/>
												</Menu.Button>
												<ReactTooltip
													id="registerTip"
													place="top"
													effect="solid"
												>
													{user?.displayName}
												</ReactTooltip>
											</div>
										</Menu>
									) : (
										<Link
											to="/login"
											className="hidden px-3 py-2 text-sm font-medium text-gray-300 rounded-md md:block hover:bg-gray-700 hover:text-white"
										>
											Login
										</Link>
									)}

									<div className="flex items-center ml-5 text-white lg:ml-10">
										<button
											className="transition-all"
											onClick={() => setDark((prev) => !prev)}
										>
											{dark ? (
												<HiMoon className="w-6 h-6" />
											) : (
												<ImSun className="w-6 h-6" />
											)}
										</button>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="md:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								<Link
									to="/"
									className="block px-3 py-2 text-base font-medium text-gray-300 bg-gray-900 rounded-md hover:bg-gray-700 hover:text-white"
								>
									Home
								</Link>
								<Link
									to="/courses"
									className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
								>
									Courses
								</Link>
								<Link
									to="/blog"
									className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
								>
									Blog
								</Link>
								<Link
									to="/faq"
									className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
								>
									FAQ
								</Link>
								{user?.uid ? (
									<button
										onClick={logOut}
										className="block w-full px-5 py-2 text-white bg-purple-600 rounded-md"
									>
										logout
									</button>
								) : (
									<Link
										to="/login"
										className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
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
