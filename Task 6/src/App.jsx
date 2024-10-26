import Frontpage from "./components/Frontpage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Frontpage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
