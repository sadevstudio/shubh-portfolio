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
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import useLenis from "./hooks/useLenis";
import CustomCursor from "./components/ui/CustomCursor";
import PageLoader from "./components/ui/PageLoader";
import Particles from "./components/ui/Particles";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
function App() {

  useLenis();

  return (
    <>
  <SmoothScroll />
  <PageLoader />
  <Navbar />

  <div id="smooth-wrapper">

    <div id="smooth-content">

      

      <div className="noise"></div>

      <CustomCursor />

      <Particles />

      <ScrollToTop />

      <AppRoutes />

    </div>

  </div>
</>
  );
}

export default App;