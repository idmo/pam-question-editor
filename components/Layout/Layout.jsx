import { useState } from 'react';

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
			<div className=''>
				<div className='fixed w-full h-12 bg-gray-800 border-b-2 border-black'>
					<div className='p-4 font-semibold text-white'>PAM</div>
				</div>
				<div className='flex flex-row pt-14'>
					<div>{children}</div>
				</div>
			</div>
		</>
	);
};
export default Layout;
