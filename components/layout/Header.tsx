"use client";

import { Dispatch, SetStateAction, useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import Logo from '../shared/Logo';

interface NavItemConfig {
	label: string;
	href: string;
}

const NAV_ITEMS: NavItemConfig[] = [
	{ label: "Home", href: "/" },
	{ label: "Tours", href: "/tours" },
	{ label: "Blogs", href: "/blogs" },
	{ label: "Contact", href: "/contact" },
	{ label: "About", href: "/about" },
];

interface NavItemProps {
	item: NavItemConfig;
	index: number;
	active: boolean;
	setActive: Dispatch<SetStateAction<number>>
}

const NavItem = ({ item, index, active, setActive }: NavItemProps) => {
	const handleClick = () => {
		setActive(index)
	}
	return (
		<Link
			href={item.href}
			className={`text-center h-[37px] text-[14px] font-bold text-indigo transition-colors ${active ? "bg-orange text-white" : "bg-white/70 hover:bg-white"} px-[24px] py-[8px] rounded-full shadow-sm/30`}
			onClick={handleClick}
		>
			{item.label}
		</Link>
	);
};

const Header = () => {
	const [active, setActive] = useState<number>(0)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const closeMobileMenu = () => setIsMobileMenuOpen(false)

	return (
		<header className="w-full bg-pine h-[85px] fixed top-0 z-20">
			<div className="mx-auto flex max-w-6xl items-center justify-between h-full px-4">
				<Logo />

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center gap-[12px] bg-white/20 p-[6px] rounded-full border border-white inset-shadow-sm/30">
					{NAV_ITEMS.map((item, index) => (
						<NavItem
							key={item.href}
							item={item}
							index={index}
							active={index == active}
							setActive={setActive}
						/>
					))}
				</nav>

				{/* Mobile hamburger */}
				<button
					type="button"
					className="md:hidden inline-flex items-center justify-center p-2 text-white hover:bg-white/10 transition-colors"
					aria-label="Open navigation menu"
					onClick={() => setIsMobileMenuOpen(true)}
				>
					<span className="sr-only">Open menu</span>
					<div className="flex flex-col gap-1">
						<span className="block h-0.5 w-6 bg-white rounded-full" />
						<span className="block h-0.5 w-6 bg-white rounded-full" />
						<span className="block h-0.5 w-6 bg-white rounded-full" />
					</div>
				</button>
			</div>

			{/* Mobile sidebar & overlay */}
			{isMobileMenuOpen && (
				<>
					{/* Backdrop */}
					<div
						className="fixed inset-0 z-40 bg-black/40"
						onClick={closeMobileMenu}
					/>

					{/* Sidebar */}
					<aside className="fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl flex flex-col">
						<div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
							<Link href="/" onClick={closeMobileMenu}>
								<Image src="/logo.png" alt="Euphoria Travels" width={50} height={50} />
							</Link>
							<button
								type="button"
								className="p-2 rounded-full hover:bg-gray-100 transition-colors"
								aria-label="Close navigation menu"
								onClick={closeMobileMenu}
							>
								<span className="sr-only">Close menu</span>
								<div className="h-5 w-5 relative">
									<span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-700 rotate-45" />
									<span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-700 -rotate-45" />
								</div>
							</button>
						</div>

						<nav className="flex flex-col gap-2 px-4 py-4">
							{NAV_ITEMS.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="py-2 px-3 rounded-full text-sm font-semibold text-indigo hover:bg-indigo/5"
									onClick={closeMobileMenu}
								>
									{item.label}
								</Link>
							))}
						</nav>
					</aside>
				</>
			)}
		</header>
	);
};

export default Header;

