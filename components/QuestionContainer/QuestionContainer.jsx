import { useDraggable } from '@dnd-kit/core';
import {
	AnnotationIcon,
	CloudIcon,
	CloudUploadIcon,
	DotsHorizontalIcon,
} from '@heroicons/react/outline';
import { ViewGridIcon } from '@heroicons/react/solid';

const QuestionContainer = ({ question, index }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: question.id,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;
	return (
		<div
			style={style}
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className='relative p-2 text-sm bg-white rounded-md hover:border-dotted'>
			<div className='flex flex-row items-center justify-between px-1 mb-1 border-b border-gray-200'>
				<div className='flex text-indigo-400'>
					<span className='font-semibold'>{index + 1}</span>
				</div>
				<DotsHorizontalIcon className='w-4 h-4 text-gray-600' />
			</div>
			<div className='flex flex-row space-x-1'>
				<div className='flex flex-row justify-between'>
					<div dangerouslySetInnerHTML={{ __html: question.notes }} />
				</div>
			</div>

			<div className='flex flex-row justify-between item-center pt-1.5 text-gray-400'>
				{question.comment ? (
					<AnnotationIcon className='inline-flex w-4 h-4 text-indigo-500' />
				) : (
					<AnnotationIcon className='inline-flex w-4 h-4 text-gray-400' />
				)}
				{question.uploaded ? (
					<CloudIcon className='inline-flex w-4 h-4 text-gray-400' />
				) : (
					<CloudUploadIcon className='inline-flex w-4 h-4 text-indigo-500' />
				)}
			</div>
		</div>
	);
};

export default QuestionContainer;
