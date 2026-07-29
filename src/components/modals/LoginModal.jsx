import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const LoginModal = () => {
  const { isLoginOpen, setIsLoginOpen, setIsGestorMode, showToast } = useApp();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  if (!isLoginOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim() !== '') {
      setIsGestorMode(true);
      setIsLoginOpen(false);
      setPasscode('');
      setError('');
      showToast('Modo Gestor ativado com sucesso!');
    } else {
      setError('Por favor, informe a senha de gestor.');
    }
  };

  return (
    <div className="login-ov open">
      <div className="login-box">
        <div className="login-logo">
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'var(--or)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontFamily: 'DM Serif Display, serif',
            fontSize: '20px'
          }}>N</div>
          <div className="login-brand">
            Modo Gestor
            <span>Autenticação de Acesso</span>
          </div>
        </div>

        <form onSubmit={handleLogin}>
          {error && <div className="lerr show">{error}</div>}
          
          <input 
            type="password"
            className="lin"
            placeholder="Digite a senha de Gestor..."
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            autoFocus
          />

          <button type="submit" className="btn-login">
            Entrar como Gestor
          </button>
          
          <button 
            type="button" 
            className="btn-cancel" 
            onClick={() => setIsLoginOpen(false)}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};