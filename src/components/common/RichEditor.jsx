import React, { useState } from 'react';
import { Bold, Italic, List, Smile } from 'lucide-react';

export const RichEditor = ({ value, onChange, placeholder = 'Escreva o conteúdo...' }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const emojis = ['👍', '🚀', '💡', '🔥', '🎯', '✅', '⭐', '💻', '📚', '🎉'];

  const addEmoji = (emoji) => {
    onChange(value + emoji);
    setShowEmoji(false);
  };

  const applyFormat = (formatTag) => {
    if (formatTag === 'b') onChange(`${value} **texto**`);
    else if (formatTag === 'i') onChange(`${value} *texto*`);
    else if (formatTag === 'list') onChange(`${value}\n- item 1\n- item 2`);
  };

  return (
    <div className="rich-editor-wrap">
      <div className="rich-toolbar">
        <button type="button" className="rtb-btn" onClick={() => applyFormat('b')} title="Negrito">
          <Bold size={14} />
        </button>
        <button type="button" className="rtb-btn" onClick={() => applyFormat('i')} title="Itálico">
          <Italic size={14} />
        </button>
        <button type="button" className="rtb-btn" onClick={() => applyFormat('list')} title="Lista">
          <List size={14} />
        </button>
        <div className="rtb-sep"></div>

        <div className="rtb-emoji-wrap">
          <button type="button" className="rtb-btn" onClick={() => setShowEmoji(!showEmoji)} title="Emoji">
            <Smile size={14} />
          </button>
          {showEmoji && (
            <div className="rtb-emoji-picker open">
              {emojis.map((e, idx) => (
                <button key={idx} type="button" className="rtb-emoji-btn" onClick={() => addEmoji(e)}>
                  {e}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <textarea
        className="rich-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};