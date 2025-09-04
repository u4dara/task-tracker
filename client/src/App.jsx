import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';

const App = () => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <>
            {/* Routes that use common layout with Navbar */}
            <Route element={<MainLayout />}>
               <Route index element={<Dashboard />} />
            </Route>

            {/* Routes that do not include a Navbar */}
            <Route element={<AuthLayout />}>
               <Route path="/auth/sign-in" element={<SignIn />} />
               <Route path="/auth/sign-up" element={<SignUp />} />
            </Route>
         </>
      )
   );

   return <RouterProvider router={router} />;
};

export default App;
