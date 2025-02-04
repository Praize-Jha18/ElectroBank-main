import { Suspense,  } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
function App() {

  return (
    <Suspense fallback={
    <div className="fixed h-screen w-screen dfAc">

      <div className="custom-loader"></div>
      </div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;


