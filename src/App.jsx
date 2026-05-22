import AppRoutes from './routes/AppRoutes'
import useLenis from './hooks/useLenis'
import CustomCursor from './components/ui/CustomCursor'
import PageLoader from './components/ui/PageLoader'
import Particles from './components/ui/Particles'

function App() {

  useLenis()

  return (
    <>
      <PageLoader />
      <div className="noise"></div>
      <CustomCursor />
      <Particles />
      <AppRoutes />
    </>
  )
}

export default App