'use client';
 
import { useEffect, useRef } from 'react';
 
const variantStyles = {
  primary: 'bg-buttonbg hover:bg-[#236058] text-white',
  danger:  'bg-bgred   hover:bg-red-700   text-white',
  warning: 'bg-amber-500 hover:bg-amber-600 text-white',
  success: 'bg-emerald-600 hover:bg-emerald-700 text-white',
};
 
export default function ConfirmationModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  confirmButton,
  cancelLabel = 'Cancel',
  disableBackdropClose = false,
}) {
  const modalRef = useRef(null);
 
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);
 
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);
 
  if (!isOpen) return null;
 
  const variantClass = variantStyles[confirmButton.variant ?? 'primary'];
 
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
      onClick={!disableBackdropClose ? onClose : undefined}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Modal card */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl w-full mx-4"
        style={{ maxWidth: '560px' }}
      >
        {/* Header */}
        <div className="px-7 pt-7 pb-4">
          <h2
            id="modal-title"
            className="text-[1.35rem] font-bold text-primary leading-snug"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-primary font-medium">{subtitle}</p>
          )}
        </div>
 
        {/* Divider */}
        <hr className="border-slate-200 mx-7" />
 
        {/* Body */}
        <div className="px-7 py-5">
          <div className="text-[15px] text-primary leading-relaxed">
            {description}
          </div>
        </div>
 
        {/* Actions */}
        <div className="px-7 pb-7 flex items-center gap-3">
          {/* Confirm button */}
          <button
            onClick={confirmButton.onClick}
            disabled={confirmButton.loading}
            className={`
              flex-1 py-3 rounded-xl text-[15px] font-semibold
              transition-all duration-200 active:scale-[0.98]
              disabled:opacity-60 disabled:cursor-not-allowed
              ${variantClass}
            `}
          >
            {confirmButton.loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Saving…
              </span>
            ) : (
              confirmButton.label
            )}
          </button>
 
          {/* Cancel button */}
          <button
            onClick={onClose}
            className="
              flex-1 py-3 rounded-xl text-[15px] font-semibold
              bg-[#f0f3f7] text-slate-600
              hover:bg-[#e4e9f0] transition-all duration-200 active:scale-[0.98]
            "
          >
            {cancelLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
 