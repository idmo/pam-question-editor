import Layout from '../../components/Layout';
import { PlusIcon } from '@heroicons/react/outline';
import { PURSUITS } from '../../mocks/pursuits';
import NavListItem from '../../components/NavListItem';
import Thumbnail from '../../components/Thumbnail';

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

const Pursuits = () => {
	return (
		<Layout>
			<div className='flex flex-col space-y-4'>
				<div className='flex flex-col px-6 py-6 space-y-4 bg-white rounded-md'>
					<div className='flex flex-row justify-between'>
						<div className='text-2xl font-semibold'>Pursuits</div>
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
				<div className=''>
					<div className='flex flex-col col-span-5 px-6 py-6 space-y-4 bg-white rounded-md'>
						<div className='flex flex-row justify-between'>
							<div className='text-2xl font-semibold'>
								<input
									type='search'
									className='w-full p-3 rounded-md'
									placeholder='Search Pursuits'
								/>
							</div>
							<div>
								<button className='inline-flex items-center px-3 py-2 space-x-3 bg-gray-300 rounded-md'>
									Add New Pursuit <PlusIcon className='w-4 h-4' />
								</button>
							</div>
						</div>
						<div className='flex flex-col space-y-4'>
							{PURSUITS.map((_p, i) => (
								<NavListItem key={i}>
									<div className='flex flex-row items-center space-x-4'>
										<Thumbnail>{_p.score}</Thumbnail>
										<div className='flex flex-col'>
											<div className='text-xl font-semibold'>{_p.title}</div>
											<div>{_p.category}</div>
										</div>
									</div>
								</NavListItem>
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Pursuits;
