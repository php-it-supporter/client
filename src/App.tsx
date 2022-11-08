import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminRouter } from './routes/admin';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin">
          {AdminRouter.map((r: any) => (
            <Route {...r.routeProps} element={<r.component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
