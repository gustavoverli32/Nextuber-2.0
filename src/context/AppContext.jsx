import React, { createContext, useContext, useState } from 'react';
import { initialEstagiarios } from '../services/supabase';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('overview');
  const [isGestorMode, setIsGestorMode] = useState(true);
  const [estagiarios, setEstagiarios] = useState(initialEstagiarios);
  const [selectedEstagiario, setSelectedEstagiario] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [bannerData, setBannerData] = useState({
    title: 'Projeto Acompanhamento Nextuber 2.0',
    subtitle: 'Programa de Formação e Desenvolvimento contínuo de talentos.'
  });

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isEditBannerOpen, setIsEditBannerOpen] = useState(false);
  const [isPermissoesOpen, setIsPermissoesOpen] = useState(false);
  const [isVerMaisOpen, setIsVerMaisOpen] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addEstagiario = (newEst) => {
    const created = {
      id: Date.now(),
      avatar: newEst.name.charAt(0).toUpperCase(),
      cicloProgress: 0,
      requerAtencao: false,
      status: 'Ativo',
      ...newEst
    };
    setEstagiarios(prev => [created, ...prev]);
    showToast(`Estagiário ${newEst.name} cadastrado com sucesso!`);
  };

  const toggleAtencao = (id) => {
    setEstagiarios(prev => prev.map(e => e.id === id ? { ...e, requerAtencao: !e.requerAtencao } : e));
    showToast('Status de atenção atualizado!');
  };

  return (
    <AppContext.Provider value={{
      activePage,
      setActivePage,
      isGestorMode,
      setIsGestorMode,
      estagiarios,
      setEstagiarios,
      selectedEstagiario,
      setSelectedEstagiario,
      isDrawerOpen,
      setIsDrawerOpen,
      toastMessage,
      showToast,
      bannerData,
      setBannerData,
      isLoginOpen,
      setIsLoginOpen,
      isEditBannerOpen,
      setIsEditBannerOpen,
      isPermissoesOpen,
      setIsPermissoesOpen,
      isVerMaisOpen,
      setIsVerMaisOpen,
      addEstagiario,
      toggleAtencao
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);