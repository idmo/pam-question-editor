const Layout = ({ children }) => {
	return (
		<div className='relative flex flex-row justify-start'>
			<div className='relative w-[200px] h-screen p-4 z-10 shadow-xl bg-gray-800'>
				<div className='text-white'>
					<div>Left</div>
				</div>
			</div>
			<div className='flex-auto'>{children}</div>
		</div>
	);
};
export default Layout;
