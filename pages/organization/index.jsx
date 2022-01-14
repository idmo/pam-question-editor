import Layout from '../../components/Layout';
import { ChevronRightIcon, PlusIcon } from '@heroicons/react/solid';

const STATS = [
	{
		name: 'Open Pursuits',
		stat: '19',
	},
	{
		name: 'Average Age',
		stat: '2 Weeks',
	},
	{
		name: 'Library Entries',
		stat: '203 Questions',
	},
	{
		name: 'Team Members',
		stat: '14 People',
	},
];

const PURSUITS = [
	{
		name: 'Acme',
		latest: 'March 1, 2022',
		status: 'Great',
	},
	{
		name: 'Acme',
		latest: 'March 1, 2022',
		status: 'Great',
	},
	{
		name: 'Acme',
		latest: 'March 1, 2022',
		status: 'Great',
	},
	{
		name: 'Acme',
		latest: 'March 1, 2022',
		status: 'Great',
	},
	{
		name: 'Acme',
		latest: 'March 1, 2022',
		status: 'Great',
	},
];

const Organization = () => {
	return (
		<Layout>
			<div className='flex flex-col space-y-4'>
				<div className='flex flex-col px-6 py-6 space-y-4 bg-white rounded-md'>
					<div className='flex flex-row justify-between'>
						<div className='text-2xl font-semibold'>Organization Page</div>
						<div className='text-sm text-gray-500'>
							Current usage 3000 since
						</div>
					</div>
					<div>
						<div>Welcome Back</div>
					</div>
					<div className='flex flex-row justify-start space-x-3'>
						{STATS.map((_x, i) => (
							<div
								key={i}
								className='w-[300px] border-t-8 px-4 py-2 rounded-md border-gray-400 bg-gray-100'>
								<div className='text-lg font-semibold'>{_x.name}</div>
								<div className='text-2xl text-gray-700'>{_x.stat}</div>
							</div>
						))}
					</div>
				</div>
				<div className='grid grid-cols-8 gap-4'>
					<div className='flex flex-col col-span-5 px-6 py-6 space-y-4 bg-white rounded-md'>
						<div className='flex flex-row justify-between'>
							<div className='text-2xl font-semibold'>Pursuits</div>
							<div>
								<button className='inline-flex items-center px-3 py-2 space-x-3 bg-gray-300 rounded-md'>
									Add New Pursuit <PlusIcon className='w-4 h-4' />
								</button>
							</div>
						</div>
						<div className='flex flex-col space-y-4'>
							{PURSUITS.map((_p, i) => (
								<div
									key={i}
									className='flex flex-row items-center justify-between'>
									<div className='flex flex-row items-center space-x-4'>
										<div className='h-20 bg-gray-200 rounded-md w-28'></div>
										<div>
											<div className='text-xl font-semibold'>{_p.name}</div>
											<div>{_p.latest}</div>
										</div>
									</div>
									<div>
										<ChevronRightIcon className='w-6 h-6 text-gray-500' />
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col col-span-3 px-6 py-6 space-y-4 bg-white rounded-md'>
						<div className='flex flex-row justify-between'>
							<div className='text-2xl font-semibold'>Members</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Organization;
