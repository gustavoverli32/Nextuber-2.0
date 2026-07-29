import React from 'react';

export const Logo = ({ size = 120 }) => {
  return (
    <div style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #FF6A00, #EE0000)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(236,112,0,0.35)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px'
    }}>
      <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', display: 'block' }}>
        <defs>
          <linearGradient id="uberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="100%" stopColor="#FFE5D0" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#7A2200" floodOpacity="0.4" />
          </filter>
        </defs>

        <path d="M 30 115 C 60 115, 100 100, 140 70" fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
        <path d="M 40 125 C 70 125, 110 110, 150 78" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

        <g transform="translate(130, 45) rotate(-35)">
          <path d="M 0 -25 C 12 -20, 18 -5, 18 15 L -18 15 C -18 -5, -12 -20, 0 -25 Z" fill="#FFF" filter="url(#shadow)" />
          <circle cx="0" cy="-5" r="5" fill="#EE0000" />
          <path d="M -18 10 L -28 25 L -14 20 Z" fill="#FFF" />
          <path d="M 18 10 L 28 25 L 14 20 Z" fill="#FFF" />
          <path d="M -8 15 L 0 30 L 8 15 Z" fill="#FF8800" />
        </g>

        <path d="M 115 50 L 118 56 L 124 59 L 118 62 L 115 68 L 112 62 L 106 59 L 112 56 Z" fill="#FFF" />
        <circle cx="102" cy="70" r="2.5" fill="#FFF" opacity="0.8" />

        <path d="M 25 110 C 20 85, 45 75, 95 80" fill="none" stroke="#FFF" strokeWidth="5" strokeLinecap="round" opacity="0.95" />

        <g filter="url(#shadow)">
          <text x="30" y="112" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontStyle="italic" fontSize="33" fill="#FFF" letterSpacing="-1">
            NEXT
          </text>
          <text x="106" y="112" fontFamily="'DM Sans', sans-serif" fontWeight="900" fontStyle="italic" fontSize="33" fill="#FFDFBA" letterSpacing="-1">
            UBER
          </text>
        </g>

        <text x="100" y="138" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontWeight="800" fontSize="9.5" fill="#FFF" letterSpacing="0.8" opacity="0.95">
          A PRÓXIMA GERAÇÃO DE ITUBERS
        </text>
      </svg>
    </div>
  );
};