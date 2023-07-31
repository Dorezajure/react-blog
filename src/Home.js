import { useEffect, useState } from 'react';
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const [updateFlag, setUpdateFlag] = useState(false);
    const {data, isLoading, error} = useFetch('http://localhost:8000/posts');

	return (
		<div className='home'>
            { error && <div>{error}</div>}
            { isLoading && <h3>Loading...</h3>}
            { data && <BlogList updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} posts={data} /> }
		</div>
	);
};

export default Home;

/*{posts && <BlogList posts={posts} />} - 
Данная строка позволяет сделать условный рендеринг страницы, 
но после того как на страницу 
были получены данные */
