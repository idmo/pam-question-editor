const Thumbnail = ({ children }) => {
	return (
		<div className='inline-flex items-center justify-center h-20 p-2 text-2xl bg-indigo-200 rounded w-[120px] border-4 border-indigo-700'>
			{children}
		</div>
	);
};
export default Thumbnail;
