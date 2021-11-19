import {
	ChevronRightIcon,
	PlusIcon,
	DotsHorizontalIcon,
	CloudUploadIcon,
	CloudIcon,
	AnnotationIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { QUESTIONS } from '../../mocks/questions';
import { COLUMNS } from './columns';
import { Disclosure } from '@headlessui/react';

const List = () => {
	const [columnList, setColumnList] = useState(COLUMNS);
	return (
		<Layout>
			<div className='flex flex-col'>
				<div className='px-8'>
					<div className='flex items-center py-2 space-x-1 text-sm font-semibold'>
						<PlusIcon className='w-4 h-4' />
						<span className='inline-flex'>New Category</span>
					</div>
					{columnList.map((_c, i) => (
						<>
							<div
								key={i}
								className='flex flex-row items-center justify-between py-2 mt-2 font-semibold border-t-4 border-gray-300'>
								<div className='flex flex-row items-center space-x-1'>
									<ChevronRightIcon className='w-4 h-4 text-gray-600' />
									<div>{_c.name}</div>
								</div>
								<div className='inline-flex hover:space-x-1'>
									<PlusIcon className='w-4 h-4' />
									<DotsHorizontalIcon className='w-4 h-4' />
								</div>
							</div>
							{_c.questions.map((_q, i) => (
								<div
									key={i}
									className='flex flex-row justify-between py-2 pl-6 space-x-2 align-top border-t border-gray-300'>
									<div className='flex flex-row justify-start space-x-2'>
										<div className='flex text-indigo-400'>
											<span className='font-semibold'>{i + 1}</span>
										</div>
										<div>{_q.notes}</div>
									</div>
									<div className='flex flex-row justify-between item-center pt-1.5 text-gray-400 space-x-4'>
										{_q.comment ? (
											<AnnotationIcon className='inline-flex w-4 h-4 text-indigo-500' />
										) : (
											<AnnotationIcon className='inline-flex w-4 h-4 text-gray-400' />
										)}
										{_q.uploaded ? (
											<CloudIcon className='inline-flex w-4 h-4 text-gray-400' />
										) : (
											<CloudUploadIcon className='inline-flex w-4 h-4 text-indigo-500' />
										)}
									</div>
								</div>
							))}
							<div className='flex items-center py-2 pl-6 space-x-1 text-sm font-semibold border-t border-gray-300'>
								<PlusIcon className='w-4 h-4' />
								<span className='inline-flex'>Add a Question</span>
							</div>
						</>
					))}
				</div>
			</div>
		</Layout>
	);
};
export default List;
