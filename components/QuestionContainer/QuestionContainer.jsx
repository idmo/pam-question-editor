import { useDraggable } from '@dnd-kit/core';
import {
	AnnotationIcon,
	CloudIcon,
	CloudUploadIcon,
} from '@heroicons/react/outline';
import { ViewGridIcon } from '@heroicons/react/solid';

const QuestionContainer = ({ question }) => {
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
			className='relative p-2 text-sm bg-white border-l-4 border-indigo-900 shadow-md'>
			<div className='flex flex-row justify-between'>
				<ViewGridIcon className='absolute right-0 w-4 h-4 text-gray-200 top-1' />
				<div dangerouslySetInnerHTML={{ __html: question.notes }} />
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
