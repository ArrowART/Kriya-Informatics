
import './App.css'
import Approuter from './router/Approuter'

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


  return (
    <>
        <div>
          <Approuter/>
      </div>
    </>
  )
}

export default App
