import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const EditBannerModal = () => {
  const { isEditBannerOpen, setIsEditBannerOpen, bannerData, setBannerData, showToast } = useApp();
  const [title, setTitle] = useState(bannerData.title);
  const [subtitle, setSubtitle] = useState(bannerData.subtitle);

  if (!isEditBannerOpen) return null;

  const handleSave = () => {
    setBannerData({ title, subtitle });
    setIsEditBannerOpen(false);
    showToast('Banner do projeto atualizado!');
  };

  return (
    <div className="modal-ov open">
      <div className="modal-box">
        <h3>Editar Banner do Projeto</h3>
        
        <div style={{ marginBottom: '12px' }}>
          <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink2)', display: 'block', marginBottom: '4px' }}>TÍTULO</label>
          <input 
            type="text" 
            className="lin"
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink2)', display: 'block', marginBottom: '4px' }}>SUBTÍTULO</label>
          <input 
            type="text" 
            className="lin"
            value={subtitle} 
            onChange={(e) => setSubtitle(e.target.value)} 
          />
        </div>

        <div className="modal-btns">
          <button className="btn-sm" onClick={() => setIsEditBannerOpen(false)}>Cancelar</button>
          <button className="btn-sm pr" onClick={handleSave}>Salvar Alterações</button>
        </div>
      </div>
    </div>
  );
};