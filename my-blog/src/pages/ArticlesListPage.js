import articles from './article-content';
import ArticlesList from '../components/ArticlesList';


const ArticlesListPage = () => {
    return (
        <>
        <h1>This is the articles list page !</h1>
        {/* { articles.map(article => (
            <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p> {article.content[0].substring(0,150)}...</p>
            </Link>
        ))} */}
        <ArticlesList articles={articles} />
        </>
    )
}

export default ArticlesListPage;