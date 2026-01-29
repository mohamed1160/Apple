import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/Router';
import { Toaster } from 'react-hot-toast';


export default function App() {
  return (
      <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <AppRouter />
      </BrowserRouter>
  );
}
