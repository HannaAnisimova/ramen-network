import FirstScreen from './conteiners/first-screen/First-screen'
import Header from './conteiners/header/Header'
import InformBlock from './conteiners/infom-block/Inform-block'
import NewsBlock from './conteiners/news-block/News-block'
import Footer from './conteiners/footer/Footer'
import './App.scss'

const App = () => {
 
  return (
    <div className="app">
      <Header />
      <FirstScreen />
      <InformBlock />
      <NewsBlock />
      <Footer />
    </div>
  )
}
export default App