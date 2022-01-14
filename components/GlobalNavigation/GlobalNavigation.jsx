import {
	BellIcon,
	SupportIcon,
	UserCircleIcon,
	HomeIcon,
	UsersIcon,
} from '@heroicons/react/outline';
const GlobalNavigation = () => {
	return (
		<nav className='flex flex-row justify-between'>
			<div className='flex flex-row items-center justify-start space-x-1'>
				<div id='logo'>
					<HomeIcon className='text-gray-400 w-9 h-9' />
				</div>
				<div className='text-2xl font-semibold'>Celeton, Inc Sales</div>
			</div>
			<div className='flex flex-row items-center justify-start space-x-1'>
				<UsersIcon className='w-6 h-6 text-gray-400' />
				<BellIcon className='w-6 h-6 text-gray-400' />
				<SupportIcon className='w-6 h-6 text-gray-400' />
				<UserCircleIcon className='w-6 h-6 text-gray-400' />
			</div>
		</nav>
	);
};

export default GlobalNavigation;
