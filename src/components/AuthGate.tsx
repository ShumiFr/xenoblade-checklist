import { useState } from 'react';
import { Icon } from './Icon';
import { THEMES } from '../contexts/theme';
import { useTheme } from '../contexts/useTheme';
import type { ThemeKey } from '../contexts/theme';

interface Props {
   onSignIn: (email: string) => Promise<{ error: Error | null }>;
}

export function AuthGate({ onSignIn }: Props) {
   const { themeKey, setTheme } = useTheme();
   const [email, setEmail] = useState('');
   const [sent, setSent] = useState(false);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [focus, setFocus] = useState(false);

   const handleSubmit = async () => {
      if (!email.trim()) return;
      setLoading(true);
      setError('');
      const { error } = await onSignIn(email.trim());
      setLoading(false);
      if (error) setError("Une erreur est survenue. Vérifie l'adresse email.");
      else setSent(true);
   };

   return (
      <div style={{
         minHeight: '100vh', display: 'grid', placeItems: 'center',
         background: 'radial-gradient(1200px 500px at 50% 0%, var(--accent-soft), transparent 60%), var(--bg)',
         fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}>
         <div style={{ width: '100%', maxWidth: '400px', padding: '0 20px' }}>

            {/* Logo */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
               <div style={{
                  width: '52px', height: '52px', borderRadius: '16px', marginBottom: '16px',
                  background: 'linear-gradient(150deg, var(--accent), var(--accent-2))',
                  display: 'grid', placeItems: 'center', color: '#fff',
                  boxShadow: '0 12px 32px var(--accent-soft)',
               }}>
                  <Icon name="circle-check-big" size={26} />
               </div>
               <h1 style={{ fontWeight: 800, fontSize: '22px', letterSpacing: '-0.03em', color: 'var(--text)', margin: 0 }}>
                  Completionist
               </h1>
               <p style={{ color: 'var(--dim)', fontSize: '13px', marginTop: '6px' }}>
                  100% tracker
               </p>
            </div>

            {/* Card */}
            <div style={{
               background: 'var(--panel)', border: '1px solid var(--border)',
               borderRadius: '18px', padding: '28px',
            }}>
               {!sent ? (
                  <>
                     <h2 style={{ fontWeight: 700, fontSize: '17px', color: 'var(--text)', margin: '0 0 6px' }}>
                        Connexion
                     </h2>
                     <p style={{ fontSize: '13px', color: 'var(--dim)', margin: '0 0 22px', lineHeight: 1.55 }}>
                        Entre ton email pour recevoir un lien de connexion. Aucun mot de passe requis.
                     </p>

                     <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-2)', marginBottom: '7px', letterSpacing: '.02em' }}>
                        Adresse email
                     </label>
                     <input
                        type="email" value={email} placeholder="toi@example.com"
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                        style={{
                           width: '100%', background: 'var(--panel-2)',
                           border: `1px solid ${focus ? 'var(--accent-line)' : 'var(--border-2)'}`,
                           borderRadius: '10px', color: 'var(--text)', fontFamily: 'inherit',
                           fontSize: '14px', padding: '11px 14px', outline: 'none',
                           transition: 'border-color .15s', marginBottom: error ? '8px' : '16px',
                        }}
                     />

                     {error && (
                        <p style={{ fontSize: '12px', color: '#ff8585', marginBottom: '16px' }}>{error}</p>
                     )}

                     <button onClick={handleSubmit} disabled={loading || !email.trim()}
                        style={{
                           width: '100%', padding: '12px', borderRadius: '10px', border: 'none',
                           background: 'var(--accent)', color: 'var(--on-accent)',
                           fontFamily: 'inherit', fontSize: '14px', fontWeight: 700,
                           cursor: loading || !email.trim() ? 'not-allowed' : 'pointer',
                           opacity: loading || !email.trim() ? 0.6 : 1,
                           transition: 'opacity .15s',
                        }}
                     >
                        {loading ? 'Envoi en cours…' : 'Envoyer le lien de connexion'}
                     </button>
                  </>
               ) : (
                  <div style={{ textAlign: 'center', padding: '12px 0' }}>
                     <div style={{ fontSize: '36px', marginBottom: '14px' }}>📬</div>
                     <h2 style={{ fontWeight: 700, fontSize: '17px', color: 'var(--text)', margin: '0 0 8px' }}>
                        Vérifie tes emails
                     </h2>
                     <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                        Un lien de connexion a été envoyé à <strong style={{ color: 'var(--text-2)' }}>{email}</strong>.
                        Clique dessus pour te connecter — le lien est valable 1 heure.
                     </p>
                     <button onClick={() => setSent(false)}
                        style={{ marginTop: '20px', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', fontWeight: 600 }}>
                        ← Changer d'adresse
                     </button>
                  </div>
               )}
            </div>

            {/* Theme picker */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
               {(Object.keys(THEMES) as ThemeKey[]).map(k => (
                  <button key={k} title={THEMES[k].name} onClick={() => setTheme(k)} style={{
                     width: '20px', height: '20px', borderRadius: '50%', cursor: 'pointer',
                     padding: 0, background: THEMES[k].dot, border: `2px solid ${themeKey === k ? 'var(--text)' : 'transparent'}`,
                     transition: 'border-color .15s',
                  }} />
               ))}
            </div>
         </div>
      </div>
   );
}