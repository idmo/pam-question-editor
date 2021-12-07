import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';

const QuestionModal = ({ isOpen, closeModal, title, children, action }) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as='div'
					className='fixed inset-0 z-10 overflow-y-auto'
					onClose={closeModal}>
					<div className='min-h-screen px-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-70' />
						</Transition.Child>
						<span
							className='inline-block h-screen align-middle'
							aria-hidden='true'>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'>
							<div className='inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-sm shadow-xl max-w-7xl'>
								<Dialog.Title
									as='h3'
									className='flex flex-row justify-between text-lg font-medium leading-6 text-gray-900'>
									<div>{title ? title : 'Needs Title'}</div>
									<div className='flex flex-row'>
										<ChevronUpIcon className='w-5 h-5 text-gray-700' />
										<ChevronDownIcon className='w-5 h-5 text-gray-700' />
									</div>
								</Dialog.Title>
								<div className='py-4 mt-2 border-t border-black'>
									{children ? children : 'Empty'}
								</div>

								<div className='mt-4 space-x-3'>
									<button
										type='button'
										className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
										onClick={closeModal}>
										{action}
									</button>
									<button
										type='button'
										className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
										onClick={closeModal}>
										Cancel
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default QuestionModal;
