import React, { useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Animales } from '../components/Animales';
import { Tarifas } from '../components/Tarifas';
import { Acercade } from '../components/Acercade';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const MainRoutes = () => {
  const [nameActualState, setNameActualState] = useState('Inicio'); 
  return (
    <>
      <main>
        <BrowserRouter>
          <Header nameActualState={nameActualState} />
          <Routes>
            <Route path='/' element={<Navigate to="/inicio" />} />
            <Route path='/inicio' element={<Inicio setNameActualState={setNameActualState} />} />
            <Route path='/animales' element={<Animales setNameActualState={setNameActualState} />} />
            <Route path='/tarifas' element={<Tarifas setNameActualState={setNameActualState} />} />
            <Route path='/acercade' element={<Acercade setNameActualState={setNameActualState} />} />
            <Route path='*' element={<div> A</div>} />
          </Routes>
        </BrowserRouter>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}