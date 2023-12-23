import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Main from 'pages/Main';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />}/>
        <Route path=""/>
        <Route path=""/>
      </Route>
    </Routes>
  );
}

export default App;
