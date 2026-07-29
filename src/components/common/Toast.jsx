import React from 'react';
import { useApp } from '../../context/AppContext';

export const Toast = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="toast show">
      <div className="tdot"></div>
      <span>{toastMessage}</span>
    </div>
  );
};