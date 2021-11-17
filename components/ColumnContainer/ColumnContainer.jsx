import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import QuestionContainer from '../QuestionContainer';
import { DotsHorizontalIcon, PlusIcon } from '@heroicons/react/outline';
import { ArrowsExpandIcon } from '@heroicons/react/solid';

const ColumnContainer = ({ column }) => {
	const [questionList, setQuestionList] = useState(column.questions);

	const { isOver, setNodeRef } = useDroppable({
		id: column.id,
	});

	function addQuestion(obj) {
		setQuestionList((arr) => [...arr, obj]);
	}

	console.log(questionList);
	const style = {
		color: isOver ? 'green' : undefined,
	};
	return (
		<div className='w-[300px] p-1.5' ref={setNodeRef}>
			<div className='flex flex-row items-center justify-between pt-2 mb-2 font-semibold px-1.5'>
				<div>{column.name}</div>
				<div className='inline-flex space-x-1'>
					<PlusIcon className='w-4 h-4' />
					<DotsHorizontalIcon className='w-4 h-4' />
				</div>
			</div>
			<div className='flex flex-col space-y-2'>
				{questionList.map((_q, i) => (
					<QuestionContainer key={i} question={_q} />
				))}
			</div>
			<button
				onClick={() =>
					addQuestion({ id: questionList.length + 1, notes: 'Nothing' })
				}
				className='flex flex-row items-center justify-between w-full py-2 mt-1 text-sm text-gray-800 rounded hover:bg-indigo-300'>
				<div>
					<PlusIcon className='inline-flex w-4 h-4' />
					<span className='inline-flex'>Add a Question</span>
				</div>
				<ArrowsExpandIcon className='inline-flex w-4 h-4 text-gray-400' />
			</button>
		</div>
	);
};
export default ColumnContainer;
