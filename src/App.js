import './App.css'
import Header from './components/Header/Header'
import Stories from './components/Stories/Stories'
import Card from '@material-ui/core/Card'
import Posts from './components/Posts/Posts'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <main>
          <Card className="app__stories">
            <Stories />
          </Card>
          <Posts />
        </main>
        <div className="rightSide">
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default App
