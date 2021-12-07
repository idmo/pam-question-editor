import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import QuestionContainer from '../QuestionContainer';
import { DotsHorizontalIcon, PlusIcon } from '@heroicons/react/outline';
import { ArrowsExpandIcon } from '@heroicons/react/outline';
import classNames from '../../utils/classnames';

const ColumnContainer = ({ column, children }) => {
	const [questionList, setQuestionList] = useState(column.questions);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isFullPage, setIsFullPage] = useState(false);
	const { isOver, setNodeRef } = useDroppable({
		id: column.id,
	});

	function addQuestion(obj) {
		setQuestionList((arr) => [...arr, obj]);
	}

	const style = {
		color: isOver ? 'green' : undefined,
	};
	return (
		<div
			className={classNames(
				column.name
					? ' bg-indigo-100 hover:bg-indigo-300 hover:shadow-lg border border-indigo-100 hover:border-dashed hover:border-indigo-700 rounded-md'
					: ' border border-gray-300 border-dashed bg-gray-100',
				'w-full md:w-[360px] p-1.5 h-full '
			)}
			ref={setNodeRef}>
			<div className={classNames(isCollapsed ? 'hidden' : 'block')}>
				<div className='flex flex-row items-center justify-between pt-2 mb-2 font-semibold px-1.5'>
					<div>{column.name ? column.name : 'Questions'}</div>
					<div className='inline-flex space-x-1'>
						<PlusIcon className='w-4 h-4' />
						<DotsHorizontalIcon className='w-4 h-4' />
					</div>
				</div>
				<div className='flex flex-col space-y-2'>{children}</div>
				<button
					onClick={() =>
						addQuestion({ id: questionList.length + 1, notes: 'Nothing' })
					}
					className='flex flex-row items-center justify-between w-full px-2 py-2 mt-1 text-sm text-gray-800 rounded hover:bg-indigo-300'>
					<div>
						<PlusIcon className='inline-flex w-4 h-4' />
						<span className='inline-flex'>Add a Question</span>
					</div>
					<ArrowsExpandIcon
						onClick={() => setIsFullPage(!isFullPage)}
						className='inline-flex w-4 h-4 text-indigo-600'
					/>
				</button>
			</div>
		</div>
	);
};
export default ColumnContainer;
