import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { Loader, htmlDecode } from '../../utils/tools';
import { useDispatch, useSelector } from 'react-redux'
import { getArticle } from '../../store/actions/articles'

import ScoreCard from '../../utils/scoreCard';

const Article = () => {
    const articles = useSelector(state=>state.articles);
    const dispatch = useDispatch();
    const { id } = useParams();


    useEffect(()=>{
        dispatch(getArticle(id))
    },[id,dispatch])



    return(
        <>
            { articles && articles.current ?
                <div className='article_container'>
                    <div
                        style={{
                            background:`url(https://picsum.photos/1920/1080)`
                        }}
                        className="image"
                    >
                    </div>
                    <h1>{articles.current.title}</h1>
                    <div className='mt-3 content'>
                        <div dangerouslySetInnerHTML={
                            {__html: htmlDecode(articles.current.content)}
                        }>
                        </div>
                    </div>
                    <ScoreCard current={articles.current}/>
                </div>
            :
                <Loader/>
            }
        </>
    )
}

export default Article

