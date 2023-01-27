//localhost:300/articles/param

import { useParams } from 'react-router-dom';
import articles from'./article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
   // const params = useParams();
    //const articleId = params.articleId;
    //const {articleId } = params;
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
    if(!article) {
        return <NotFoundPage/>
    }
    
    return (
        <> 
        <h1>{article.title}</h1>
        {article.content.map((paragraph,index) => (
            <p key={index}>{paragraph}</p>
        ))}

        </>
    // <h1>This is the article page for the article with id: {articleId}!</h1>
    );
}

export default ArticlePage;