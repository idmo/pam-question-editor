import Layout from '../../components/Layout/Layout';
import { QUESTIONS } from '../../mocks/questions';

const Overflow = () => {
	return (
		<>
			<Layout>
				<div className='flex flex-row space-x-10'>
					{QUESTIONS.map((_q) => (
						<div key={_q.id}>{_q.title}</div>
					))}
				</div>
			</Layout>
		</>
	);
};
export default Overflow;
