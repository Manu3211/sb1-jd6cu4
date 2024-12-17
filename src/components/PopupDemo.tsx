import React, { useState } from 'react';
import ModernPopup from './popups/ModernPopup';
import MinimalPopup from './popups/MinimalPopup';
import DynamicPopup from './popups/DynamicPopup';

export default function PopupDemo() {
  const [modernOpen, setModernOpen] = useState(false);
  const [minimalOpen, setMinimalOpen] = useState(false);
  const [dynamicOpen, setDynamicOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col space-y-2">
      <button
        onClick={() => setModernOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Popup Modern
      </button>
      <button
        onClick={() => setMinimalOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Popup Minimal
      </button>
      <button
        onClick={() => setDynamicOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Popup Dynamic
      </button>

      <ModernPopup isOpen={modernOpen} onClose={() => setModernOpen(false)} />
      <MinimalPopup isOpen={minimalOpen} onClose={() => setMinimalOpen(false)} />
      <DynamicPopup isOpen={dynamicOpen} onClose={() => setDynamicOpen(false)} />
    </div>
  );
}