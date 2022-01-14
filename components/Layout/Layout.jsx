import { useState } from 'react';
import Link from 'next/link';
import GlobalNavigation from '../GlobalNavigation/';
import SecondaryNavigation from '../SecondaryNavigation';
import Container from '../Container/Container';
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
			<Container>
				<div className='px-2 py-4 border-b border-black'>
					<GlobalNavigation />
				</div>
				<div className='px-2 py-4'>
					<SecondaryNavigation />
				</div>
				<div>{children}</div>
			</Container>
		</>
	);
};
export default Layout;
