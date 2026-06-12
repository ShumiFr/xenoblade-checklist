import { useState } from 'react';
import { Icon } from './Icon';
import { THEMES } from '../contexts/theme';
import { useTheme } from '../contexts/useTheme';
import type { ThemeKey } from '../contexts/theme';

interface Props {
   onGoogle: () => Promise<{ error: Error | null }>;
   onSignIn: (email: string, password: string) => Promise<{ error: Error | null }>;
   onSignUp: (email: string, password: string) => Promise<{ error: Error | null }>;
}

// SVG Google icon
function GoogleIcon() {
   return (
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ display: 'block', flexShrink: 0 }}>
         <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
         <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
         <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
         <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
      </svg>
   );
}


function OAuthButton({
   onClick, label, icon, light,
}: {
   onClick: () => void;
   label: string;
   icon: React.ReactNode;
   light?: boolean;
}) {
   const [hover, setHover] = useState(false);
   return (
      <button
         onClick={onClick}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '10px', fontFamily: 'inherit', fontSize: '14px', fontWeight: 600,
            padding: '11px', borderRadius: '10px', cursor: 'pointer', transition: 'all .15s',
            ...(light
               ? {
                  background: hover ? '#f0f0f0' : '#fff',
                  border: '1px solid #ddd',
                  color: '#1a1a1a',
               }
               : {
                  background: hover ? '#1a1a1a' : '#000',
                  border: '1px solid #333',
                  color: '#fff',
               }),
         }}
      >
         {icon}
         {label}
      </button>
   );
}

export function AuthGate({ onGoogle, onSignIn, onSignUp }: Props) {
   const { themeKey, setTheme } = useTheme();
   const [mode, setMode] = useState<'signin' | 'signup'>('signin');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [focusEmail, setFocusEmail] = useState(false);
   const [focusPassword, setFocusPassword] = useState(false);

   const handleSubmit = async () => {
      if (!email.trim() || !password.trim()) return;
      setLoading(true);
      setError('');
      const fn = mode === 'signin' ? onSignIn : onSignUp;
      const { error } = await fn(email.trim(), password);
      setLoading(false);
      if (error) {
         setError(
            mode === 'signin'
               ? 'Email ou mot de passe incorrect.'
               : 'Impossible de créer le compte. Cet email est peut-être déjà utilisé.'
         );
      }
   };

   const inputStyle = (focused: boolean): React.CSSProperties => ({
      width: '100%', background: 'var(--panel-2)',
      border: `1px solid ${focused ? 'var(--accent-line)' : 'var(--border-2)'}`,
      borderRadius: '10px', color: 'var(--text)', fontFamily: 'inherit',
      fontSize: '14px', padding: '11px 14px', outline: 'none', transition: 'border-color .15s',
   });

   return (
      <div style={{
         minHeight: '100vh', display: 'grid', placeItems: 'center',
         background: 'radial-gradient(1200px 500px at 50% 0%, var(--accent-soft), transparent 60%), var(--bg)',
         fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}>
         <div style={{ width: '100%', maxWidth: '400px', padding: '0 20px' }}>

            {/* Logo */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
               <div style={{
                  width: '52px', height: '52px', borderRadius: '16px', marginBottom: '14px',
                  background: 'linear-gradient(150deg, var(--accent), var(--accent-2))',
                  display: 'grid', placeItems: 'center', color: '#fff',
                  boxShadow: '0 12px 32px var(--accent-soft)',
               }}>
                  <Icon name="circle-check-big" size={26} />
               </div>
               <h1 style={{ fontWeight: 800, fontSize: '22px', letterSpacing: '-0.03em', color: 'var(--text)', margin: 0 }}>
                  Completionist
               </h1>
               <p style={{ color: 'var(--dim)', fontSize: '13px', marginTop: '5px' }}>100% tracker</p>
            </div>

            {/* Card */}
            <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '18px', padding: '24px' }}>

               {/* Boutons OAuth */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <OAuthButton
                     onClick={onGoogle}
                     icon={<GoogleIcon />}
                     label="Continuer avec Google"
                     light
                  />
               </div>

               {/* Séparateur */}
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0' }}>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                  <span style={{ fontSize: '12px', color: 'var(--faint)', fontWeight: 600 }}>ou</span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
               </div>

               {/* Formulaire email/mdp */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input
                     type="email" value={email} placeholder="Adresse email"
                     onChange={e => setEmail(e.target.value)}
                     onFocus={() => setFocusEmail(true)} onBlur={() => setFocusEmail(false)}
                     onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                     style={inputStyle(focusEmail)}
                  />
                  <input
                     type="password" value={password} placeholder="Mot de passe"
                     onChange={e => setPassword(e.target.value)}
                     onFocus={() => setFocusPassword(true)} onBlur={() => setFocusPassword(false)}
                     onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                     style={inputStyle(focusPassword)}
                  />

                  {error && (
                     <p style={{ fontSize: '12px', color: '#ff8585', margin: 0 }}>{error}</p>
                  )}

                  <button
                     onClick={handleSubmit}
                     disabled={loading || !email.trim() || !password.trim()}
                     style={{
                        width: '100%', padding: '12px', borderRadius: '10px', border: 'none',
                        background: 'var(--accent)', color: 'var(--on-accent)',
                        fontFamily: 'inherit', fontSize: '14px', fontWeight: 700,
                        cursor: loading || !email.trim() || !password.trim() ? 'not-allowed' : 'pointer',
                        opacity: loading || !email.trim() || !password.trim() ? 0.6 : 1,
                        transition: 'opacity .15s',
                     }}
                  >
                     {loading
                        ? 'Chargement…'
                        : mode === 'signin' ? 'Se connecter' : 'Créer un compte'}
                  </button>
               </div>

               {/* Toggle signin/signup */}
               <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--dim)', margin: '16px 0 0' }}>
                  {mode === 'signin' ? "Pas encore de compte ?" : 'Déjà un compte ?'}{' '}
                  <button
                     onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); }}
                     style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: 600, padding: 0 }}
                  >
                     {mode === 'signin' ? "S'inscrire" : 'Se connecter'}
                  </button>
               </p>
            </div>

            {/* Theme picker */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
               {(Object.keys(THEMES) as ThemeKey[]).map(k => (
                  <button key={k} title={THEMES[k].name} onClick={() => setTheme(k)} style={{
                     width: '20px', height: '20px', borderRadius: '50%', cursor: 'pointer',
                     padding: 0, background: THEMES[k].dot,
                     border: `2px solid ${themeKey === k ? 'var(--text)' : 'transparent'}`,
                     transition: 'border-color .15s',
                  }} />
               ))}
            </div>

         </div>
      </div>
   );
}