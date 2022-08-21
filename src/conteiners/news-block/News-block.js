import NewsData from './News.json'
import './News-block.scss'

const NewsBlock = () => {
  
  const NewsBlocks = NewsData.map(news =>
    <div key={Math.random(16)} className="new" >
      <img src={news.image} className="new__image"/>
      <div className="new-info">
        <h3 className="new__title">{news.title}</h3>
        <p className="new__text">{news.text}</p>
        <p className="new__button">{news.button}</p>
      </div>
    </div>  
  )

  return ( 
    <div className='news-block'>
      {NewsBlocks}
    </div>
  )
}

export default NewsBlock