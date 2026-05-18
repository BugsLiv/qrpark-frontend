'use client';


import { useState, useEffect } from 'react';
import { MdQrCode2 } from 'react-icons/md';
import {
  FaUser,
  FaPhone,
  FaLock,
  FaEyeSlash,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import { BiSolidMessageRoundedDots } from 'react-icons/bi';
import { RiAlarmWarningFill } from 'react-icons/ri';
import { IoShieldCheckmark } from 'react-icons/io5';
import axiosInstance from '@/lib/axios';

export default function ScanModal({ result, qrToken }) {
  const [visible, setVisible] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [senderName, setSenderName] = useState('');
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const owner = result?.data?.owner;
  const isError = !!result?.error;

  const phoneDisplay =
    owner?.countryCode && owner?.phone
      ? `${owner.countryCode} ${owner.phone}`
      : owner?.phone || null;


      async function handleSendMessage(e) {
        e.preventDefault();
      
        if (!message.trim()) return;
      
        setSending(true);
      
        try {
const payload={
  vehicleId: result?.data?.vehicle?.id,
  message,
  senderName,
}
console.log("payload",payload)
  const response = await axiosInstance.post(`messages/send`,payload);
      
        console.log("response",response)
      
          setSent(true);
      
        } catch (error) {
          console.log('Send Message Error:', error);
          alert(error.message || 'Failed to send message');
        } finally {
          setSending(false);
        }
      }
  // async function handleSendMessage(e) {
  //   e.preventDefault();
  //   if (!message.trim()) return;
  //   setSending(true);
  //   try {
  //     const baseURL = process.env.NEXT_PUBLIC_API_URL;
  //     await fetch(`${baseURL}/api/vehicles/scan/${qrToken}/message`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ message }),
  //     });
  //     setSent(true);
  //   } catch {
  //     setSent(true);
  //   } finally {
  //     setSending(false);
  //   }
  // }

  function closeDrawer() {
    setMessageOpen(false);
    setSent(false);
    setMessage('');
  }

  return (
    <>
      <div
           style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
      className="fixed inset-0 z-0 " />

      <div
        className={`
          relative z-10 flex items-center justify-center px-4 py-8
          transition-all duration-500 ease-out
          ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
        `}
      >
        <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-soft">

          <div className="bg-primary px-6 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
              <IoShieldCheckmark className="text-white text-xl" />
            </div>
            <span className="text-white text-xl font-bold tracking-tight">QR Park</span>
          </div>

          <div className="px-6 pt-7 pb-6">

            {isError ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <FaExclamationCircle className="text-bgred text-3xl" />
                </div>
                <h2 className="text-primary text-xl font-bold mb-2">
                  QR Code Not Found
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {result.error === 'not_found'
                    ? 'This QR code is invalid or has been deactivated.'
                    : 'Unable to load vehicle information. Please try again.'}
                </p>
              </div>
            ) : (
              <>
                <h1 className="text-primary text-[1.35rem] font-bold text-center mb-1">
                  Contact Vehicle Owner
                </h1>
                <p className="text-slate-400 text-sm text-center mb-5">
                  Vehicle owner details are kept private.
                </p>

                <div className="bg-primary-side-light border border-primary-side rounded-2xl px-5 py-4 mb-5 space-y-3">

                  {owner?.name && (
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                        <FaUser className="text-primary-light text-sm" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                          Owner Name
                        </p>
                        <p className="text-primary font-bold text-base leading-tight">
                          {owner.name}
                        </p>
                      </div>
                    </div>
                  )}

                  {phoneDisplay ? (
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                        <FaPhone className="text-success text-sm" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                          Phone Number
                        </p>
                        <p className="text-success font-bold text-base leading-tight">
                          {phoneDisplay}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                        <FaLock className="text-amber-500 text-sm" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                          Phone Number
                        </p>
                        <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold rounded-full px-2.5 py-1">
                          <FaEyeSlash className="text-[11px]" />
                          Hidden by owner
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">

                  <button
                    onClick={() => setMessageOpen(true)}
                    className="bg-primary-side-light border border-primary-side rounded-2xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-200 active:scale-95 text-left"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-buttonbg to-teal-600 flex items-center justify-center shadow-md">
                      <BiSolidMessageRoundedDots className="text-white text-2xl" />
                    </div>
                    <span className="w-full bg-buttonbg text-white text-[13px] font-bold rounded-xl py-2.5 text-center leading-snug block">
                      Send Message<br />to Owner
                    </span>
                  </button>

                  <button
                    onClick={() => alert('Emergency SOS triggered. Authorities may be notified.')}
                    className="bg-primary-side-light border border-primary-side rounded-2xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-200 active:scale-95 text-left"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-md">
                      <RiAlarmWarningFill className="text-white text-2xl" />
                    </div>
                    <span className="w-full bg-amber-400 text-amber-900 text-[13px] font-bold rounded-xl py-2.5 text-center leading-snug block">
                      Emergency<br />SOS
                    </span>
                  </button>
                </div>
                <p className="text-slate-400 text-[13px] text-center leading-relaxed">
                  Use these options to assist the vehicle owner
                  <br />with parking issues, safety, or emergencies.
                </p>
              </>
            )}
          </div>

          <div className="border-t border-slate-100 px-6 py-3.5 flex items-center justify-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary-side flex items-center justify-center">
              <MdQrCode2 className="text-slate-400 text-base" />
            </div>
            <span className="text-xs text-slate-400">
              <strong className="text-slate-500 font-semibold">QR Park</strong> — Secure vehicle identification
            </span>
          </div>

        </div>
      </div>

      <div
        className={`
          fixed inset-0 z-50 flex items-end justify-center
          transition-[background,opacity] duration-300
          ${messageOpen
            ? 'opacity-100 pointer-events-auto bg-black/40'
            : 'opacity-0 pointer-events-none bg-transparent'}
        `}
        onClick={(e) => { if (e.target === e.currentTarget) closeDrawer(); }}
      >
        <div
          className={`
            bg-white rounded-t-3xl w-full max-w-lg px-6 pt-5 pb-10
            transition-transform duration-[350ms] ease-out
            ${messageOpen ? 'translate-y-0' : 'translate-y-full'}
          `}
        >
          <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-6" />

          {sent ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaCheckCircle className="text-white text-3xl" />
              </div>
              <h3 className="text-primary text-lg font-bold mb-1.5">
                Message Sent!
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                The vehicle owner has been notified privately.
              </p>
              <button
                onClick={closeDrawer}
                className="w-full bg-primary-side-light border border-primary-side text-primary font-semibold rounded-xl py-3 text-sm hover:bg-primary-side transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-primary text-lg font-bold mb-1">
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Your identity stays private. The owner will receive a notification.
              </p>
              <input
  type="text"
  placeholder="Your name (optional)"
  value={senderName}
  onChange={(e) => setSenderName(e.target.value)}
  className="
    w-full border border-primary-side
    bg-primary-side-light rounded-xl px-4 py-3
    text-sm text-primary placeholder-slate-400
    outline-none mb-3
    focus:border-buttonbg focus:ring-2 focus:ring-teal-100
    transition-all
  "
/>
              <textarea
                className="
                  w-full border border-primary-side
                  bg-primary-side-light rounded-xl px-4 py-3.5
                  text-sm text-primary placeholder-slate-400
                  resize-none h-28 outline-none
                  focus:border-buttonbg focus:ring-2 focus:ring-teal-100
                  transition-all
                "
                placeholder="e.g. Your car lights are on, or you're blocking my driveway..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="flex gap-2.5 mt-4">
                <button
                  onClick={closeDrawer}
                  className="flex-1 bg-primary-side-light border border-primary-side text-slate-500 font-semibold rounded-xl py-3 text-sm hover:bg-primary-side transition-colors"
                >
                  Cancel
                </button>
                <button
                  disabled={!message.trim() || sending}
                  onClick={handleSendMessage}
                  className="flex-[2] bg-buttonbg text-white font-bold rounded-xl py-3 text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}