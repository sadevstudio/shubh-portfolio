// import AppRoutes from './routes/AppRoutes'
// import useLenis from './hooks/useLenis'
// import CustomCursor from './components/ui/CustomCursor'
// import PageLoader from './components/ui/PageLoader'
// import Particles from './components/ui/Particles'
// import ScrollToTop from "./components/ScrollToTop";

// function App() {

//   useLenis()

//   return (
//     <>
    
//       <PageLoader />
//       <div className="noise"></div>
      
//       <CustomCursor />
//       <Particles />
//       <AppRoutes />
//     </>
//   )
// }

// export default App

import AppRoutes from "./routes/AppRoutes";
import useLenis from "./hooks/useLenis";
import CustomCursor from "./components/ui/CustomCursor";
import PageLoader from "./components/ui/PageLoader";
import Particles from "./components/ui/Particles";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  useLenis();

  return (
    <>
      <PageLoader />

      <div className="noise"></div>

      <CustomCursor />

      <Particles />

      <ScrollToTop />

      <AppRoutes />
    </>
  );
}

export default App;