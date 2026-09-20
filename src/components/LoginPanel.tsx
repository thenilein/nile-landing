"use client";

import { useState, useEffect, useRef } from "react";
import { useLogin } from "@/context/LoginContext";
import { Icon } from "./Icon";

type Step = "phone" | "otp" | "success";

export function LoginPanel() {
  const { isOpen, close } = useLogin();
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Reset state when panel opens
  useEffect(() => {
    if (isOpen) {
      setStep("phone");
      setPhone("");
      setOtp(["", "", "", "", "", ""]);
      setLoading(false);
      setTimer(0);
      setTimeout(() => phoneRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Countdown timer for resend
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setStep("otp");
    setTimer(30);
    setTimeout(() => otpRefs.current[0]?.focus(), 100);
  };

  const handleOTPChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-advance to next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all filled
    if (newOtp.every((d) => d !== "") && index === 5) {
      handleVerifyOTP(newOtp);
    }
  };

  const handleOTPKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOTPPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      const newOtp = pasted.split("");
      setOtp(newOtp);
      otpRefs.current[5]?.focus();
      handleVerifyOTP(newOtp);
    }
  };

  const handleVerifyOTP = async (otpDigits?: string[]) => {
    setLoading(true);
    const code = (otpDigits || otp).join("");
    // Simulate verification
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    if (code.length >= 0) {
      setStep("success");
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(30);
    otpRefs.current[0]?.focus();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-smooth ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/30">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-sm font-bold">
              N
            </span>
            <span className="font-display font-bold text-lg text-fg">Nile POS</span>
          </div>
          <button
            onClick={close}
            className="w-9 h-9 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-fg hover:bg-border/30 transition-all"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 h-full overflow-y-auto">
          {/* Phone Step */}
          {step === "phone" && (
            <div className="animate-fade-up">
              <h2 className="font-display text-title mb-2">Welcome back</h2>
              <p className="text-sm text-muted mb-8">
                Enter your mobile number to continue
              </p>

              <form onSubmit={handleSendOTP} className="space-y-6">
                <div>
                  <label className="block text-xs font-medium text-fg mb-2">
                    Mobile Number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center px-3 rounded-xl bg-surface-elevated border border-border/50 text-sm text-muted font-medium">
                      +91
                    </div>
                    <input
                      ref={phoneRef}
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="98765 43210"
                      className="flex-1 px-4 py-3.5 rounded-xl bg-white border border-border/50 text-base text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all tracking-widest font-medium"
                      autoComplete="tel"
                    />
                  </div>
                  {phone.length > 0 && phone.length < 10 && (
                    <p className="text-xs text-amber-600 mt-1.5">
                      Enter a 10-digit mobile number
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={phone.length !== 10 || loading}
                  className="btn-primary w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending OTP...
                    </span>
                  ) : (
                    "Send OTP"
                  )}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-border/30">
                <p className="text-xs text-muted text-center">
                  By continuing, you agree to our{" "}
                  <a href="#" className="text-accent hover:underline">Terms</a> and{" "}
                  <a href="#" className="text-accent hover:underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          )}

          {/* OTP Step */}
          {step === "otp" && (
            <div className="animate-fade-up">
              <h2 className="font-display text-title mb-2">Verify OTP</h2>
              <p className="text-sm text-muted mb-1">
                We sent a 6-digit code to
              </p>
              <div className="flex items-center gap-2 mb-8">
                <p className="text-sm font-medium text-fg">
                  +91 {phone.slice(0, 5)} {phone.slice(5)}
                </p>
                <button
                  onClick={() => setStep("phone")}
                  className="text-xs text-accent hover:underline"
                >
                  Change
                </button>
              </div>

              {/* OTP Inputs */}
              <div className="flex gap-3 justify-center mb-8" onPaste={handleOTPPaste}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => { otpRefs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOTPChange(i, e.target.value)}
                    onKeyDown={(e) => handleOTPKeyDown(i, e)}
                    className={`w-12 h-14 text-center text-xl font-bold rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      digit
                        ? "border-accent bg-accent/5 text-fg"
                        : "border-border/50 bg-white text-fg focus:border-accent focus:ring-2 focus:ring-accent/20"
                    }`}
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                onClick={() => handleVerifyOTP(otp)}
                disabled={otp.some((d) => !d) || loading}
                className="btn-primary w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  "Verify & Continue"
                )}
              </button>

              {/* Resend */}
              <div className="text-center">
                {timer > 0 ? (
                  <p className="text-xs text-muted">
                    Resend OTP in <span className="font-medium text-fg">{timer}s</span>
                  </p>
                ) : (
                  <button
                    onClick={handleResend}
                    className="text-xs text-accent font-medium hover:underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Success Step */}
          {step === "success" && (
            <div className="animate-fade-up text-center pt-12">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-display text-title mb-3">You&apos;re in!</h2>
              <p className="text-sm text-muted mb-8">
                Redirecting you to your dashboard...
              </p>
              <div className="flex items-center justify-center">
                <div className="w-8 h-1 rounded-full bg-accent/20 overflow-hidden">
                  <div className="h-full bg-accent rounded-full animate-shimmer" style={{ width: "100%", backgroundSize: "200% 100%" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
