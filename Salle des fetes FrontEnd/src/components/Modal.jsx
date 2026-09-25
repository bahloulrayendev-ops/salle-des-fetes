import { useEffect } from "react";
import { IconClose } from "./icons";

export default function Modal({ title, onClose, children }) {
  // Ferme la fiche avec la touche Échap
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <IconClose width={18} height={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
