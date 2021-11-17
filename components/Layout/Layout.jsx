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
	console.log(sidebarIsOpen);
	function closeSidebar() {
		return setSidebarIsOpen(!sidebarIsOpen);
	}
	return (
		<>
			<div className='flex flex-col'>
				<div className='h-12 bg-gray-800 border-b-2 border-black'>
					<div className='p-4 font-semibold text-white'>PAM</div>
				</div>
				<div className='fixed flex flex-row inset-y-12'>
					<div
						className={classNames(
							sidebarIsOpen ? 'bg-gray-800 w-[120px]' : 'bg-gray-900 w-[40px]',
							'h-screen z-40 fixed'
						)}>
						<div className='flex flex-row justify-end pt-2 pr-2'>
							{sidebarIsOpen ? (
								<button onClick={closeSidebar}>
									<ChevronDoubleLeftIcon className='w-5 h-5 text-white' />
								</button>
							) : (
								<button onClick={closeSidebar}>
									<ChevronDoubleRightIcon className='w-5 h-5 text-white' />
								</button>
							)}
						</div>
					</div>
					<div
						className={classNames(
							sidebarIsOpen ? 'pl-[120px]' : 'pl-[40px]',
							'overflow-y-scroll overflow-x-scroll'
						)}>
						{children}
					</div>
				</div>
			</div>
		</>
	);
};
export default Layout;
