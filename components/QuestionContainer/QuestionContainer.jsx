import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import {
	AnnotationIcon,
	CloudIcon,
	CloudUploadIcon,
	DotsHorizontalIcon,
	LinkIcon,
	PlusIcon,
	TrendingUpIcon,
} from '@heroicons/react/outline';
import { KeyIcon } from '@heroicons/react/solid';
import classNames from '../../utils/classnames';
import QuestionModal from '../QuestionModal/QuestionModal';

const QuestionContainer = ({ question, index, setIsOpen, category }) => {
	const [toggle, setToggle] = useState(false);

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: question.id,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;

	function openModal() {
		setToggle(true);
		console.log(toggle);
	}

	function closeModal() {
		return setToggle(!toggle);
	}

	return (
		<div
			style={style}
			ref={setNodeRef}
			className='relative p-2 text-sm bg-white rounded-md hover:border-dotted'>
			<div className='flex flex-row items-center justify-between px-1 mb-1 border-b border-gray-200'>
				<div className='flex text-indigo-400'>
					<span className='font-semibold'>{index + 1}</span>
				</div>
				<DotsHorizontalIcon
					className='w-4 h-4 text-gray-600 hover:text-blue-600'
					onClick={() => openModal()}
				/>
			</div>

			<div {...listeners} {...attributes} className='flex flex-row space-x-1'>
				<div className='flex flex-row justify-between'>
					<div
						className={classNames(
							question.removed ? 'line-through text-gray-400' : ''
						)}
						dangerouslySetInnerHTML={{ __html: question.notes }}
					/>
				</div>
			</div>

			<div className='flex flex-row justify-end item-center space-x-3 pt-1.5 text-gray-400'>
				{question.key_question ? (
					<KeyIcon className='inline-flex w-4 h-4 text-indigo-500' />
				) : (
					<KeyIcon className='inline-flex w-4 h-4 text-gray-200' />
				)}
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
			<QuestionModal
				action={'Save'}
				isOpen={toggle}
				closeModal={closeModal}
				title={`${category}  ${question.id}`}>
				<Payload
					notes={question.notes}
					category={category}
					key_question={question.key_question}
				/>
			</QuestionModal>
		</div>
	);
};

export default QuestionContainer;

const Payload = ({ notes, category, key_question }) => {
	return (
		<div>
			<div className='grid grid-cols-2'>
				<div className='flex flex-col p-2 space-y-2'>
					<div>
						{key_question ? (
							<KeyIcon className='inline-flex w-8 h-8 text-indigo-500' />
						) : (
							<KeyIcon className='inline-flex w-8 h-8 text-gray-200' />
						)}
					</div>
					<div className='text-sm uppercase'>Category</div>
					<div>
						<select className='text-sm bg-gray-100 rounded'>
							<option>{category}</option>
						</select>
					</div>
					<div className='text-sm uppercase'>Question</div>
					<div>{notes}</div>
					<div className='text-sm uppercase'>Responses</div>
					<div className='w-full p-8 text-center border border-gray-500 border-dashed'>
						<div className='flex flex-row items-center justify-center w-full text-center'>
							<div>Add Responses</div>
							<PlusIcon className='inline-flex w-4 h-4 text-gray-400' />
						</div>
					</div>
					<div className='text-sm uppercase'>Links</div>
					<div className='flex flex-col space-y-1 text-sm'>
						<div className='p-2 space-x-3 text-white bg-gray-700 rounded-full in-flex'>
							<span>Category Name</span>
							<span className='p-1.5 bg-gray-900 rounded-full'>4</span>
							<span className='p-1.5 bg-gray-900 rounded-full'>5</span>
						</div>
						<div className='p-2 text-white bg-gray-700 rounded-full in-flex'>
							Category Name
						</div>
						<div className='flex flex-row px-2 py-2 space-x-2'>
							<TrendingUpIcon className='w-5 h-5 text-gray-700' />
							<div>Link to Another Question or Category</div>
						</div>
					</div>
				</div>
				<div className='p-2'>
					<div className='text-sm uppercase'>History</div>
					<div>
						<div className='flex flex-row items-center space-x-2'>
							<div className='rounded-full w-[20px] h-[20px] bg-gray-300 inline-flex'></div>
							<div>Brian Maggi edited 21m</div>
						</div>
						<div className='p-3 m-3 bg-gray-100 rounded'>
							<div>{notes}</div>
							<div className='mt-2 line-through'>{notes}</div>
						</div>
						<div className='flex flex-row items-center space-x-2'>
							<div className='rounded-full w-[20px] h-[20px] bg-gray-300 inline-flex'></div>
							<div>Jason Cline created 1d</div>
						</div>
						<div className='p-3 m-3 bg-gray-100 rounded'>
							<div>{notes}</div>
							<div className='mt-2 line-through'>{notes}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
