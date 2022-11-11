import React from 'react';
import MainPage from './components/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './components/error-404/error-404';
import Soon from './components/soon/soon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/trading/my-app/build'}>
          <Route index element={<MainPage/>} />
          <Route path={'/activities'} element={<Soon/>} />
          <Route path={'/technology'} element={<Soon />} />
          <Route path={'/r&d'} element={<Soon/>} />
          <Route path={'/community'} element={<Soon />} />
          <Route path={'/career'} element={<Soon/>} />
        </Route>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
