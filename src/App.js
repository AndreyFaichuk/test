import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import Page  from './components/styled/Page'
import ItemsList from './pages/itemsList'
import InfoItem from './pages/infoItem/'

const App = () => {
  return (
    <>
    <Page>
      <Router>
        <Routes>
          <Route path='/about/:id' element={<InfoItem />} />
          <Route path='/' element={<ItemsList />} />
        </Routes>
      </Router>
    </Page>
    <ToastContainer/>
    </>
  )
}

export default App