"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isTouched, setIsTouched] = useState({ email: false, password: false });

  useEffect(() => {
    if (isTouched.email) {
      if (!email) {
        setEmailError('Email is required');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Email address is invalid');
      } else {
        setEmailError('');
      }
    }
  }, [email, isTouched.email]);

  useEffect(() => {
    if (isTouched.password) {
      if (!password) {
        setPasswordError('Password is required');
      } else if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters');
      } else {
        setPasswordError('');
      }
    }
  }, [password, isTouched.password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTouched({ email: true, password: true });
    
    // Validate one last time before submitting
    let valid = true;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      valid = false;
    }
    if (!password || password.length < 6) {
      valid = false;
    }

    if (valid) {
      console.log('Form submitted:', { email, password });
      // Reset form and close modal
      setEmail('');
      setPassword('');
      setIsTouched({ email: false, password: false });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          key="signin-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div 
            key="signin-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
          <p className="text-slate-500 mb-8">Sign in to your TrendyCafe account</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setIsTouched(prev => ({ ...prev, email: true }))}
                className={`w-full px-4 py-3 rounded-xl border ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-purple-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                placeholder="you@example.com"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setIsTouched(prev => ({ ...prev, password: true }))}
                className={`w-full px-4 py-3 rounded-xl border ${passwordError ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-purple-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                placeholder="••••••••"
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                Forgot password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-purple-600/20"
            >
              Sign In
            </button>
          </form>
          
          <p className="text-center text-slate-600 mt-6 text-sm">
            Don't have an account? <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Sign up</a>
          </p>
        </div>
      </motion.div>
    </motion.div>
    )}
    </AnimatePresence>
  );
}
