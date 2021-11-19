import { useState } from 'react';
import Link from 'next/link';

import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from '@heroicons/react/outline';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Layout = ({ children }) => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

	function closeSidebar() {
		return setSidebarIsOpen(!sidebarIsOpen);
	}
	return (
		<>
			<div className='bg-white'>
				<div className='fixed flex flex-row w-full h-12 p-4 space-x-4 text-white bg-gray-800 border-b-2 border-black'>
					<div>Overview</div>
					<Link href={'/editors/list'}>
						<a>List</a>
					</Link>
					<Link href={'/editors/columns'}>
						<a>Categories</a>
					</Link>
					<div>Messages</div>
					<div>Questions</div>
				</div>
				<div className='flex flex-row pt-14'>
					<div>{children}</div>
				</div>
			</div>
		</>
	);
};
export default Layout;
