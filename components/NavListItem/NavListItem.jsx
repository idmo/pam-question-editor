import { ChevronRightIcon } from '@heroicons/react/outline';
const NavListItem = ({ children }) => {
	return (
		<div className='flex flex-row justify-between'>
			<div className='flex flex-row items-center justify-between space-x-4'>
				{children}
			</div>
			<div>
				<ChevronRightIcon className='w-6 h-6 text-gray-500' />
			</div>
		</div>
	);
};

export default NavListItem;
