import { NavLink, useRouteError } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 2rem',
      position: 'relative',
      zIndex: 1,
      gap: '2.4rem'
    }}>
      {/* Glitch 404 */}
      <div style={{ position: 'relative' }}>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(10rem, 20vw, 18rem)',
          fontWeight: 800,
          lineHeight: 1,
          background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue), var(--accent-violet))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.05em',
          filter: 'drop-shadow(0 0 40px rgba(0,212,255,0.3))',
          animation: 'glitchPulse 3s ease-in-out infinite'
        }}>
          404
        </h1>
      </div>

      {/* Icon */}
      <div style={{ fontSize: '5rem', animation: 'float 4s ease-in-out infinite' }}>
        🛸
      </div>

      <div style={{
        background: 'rgba(8,20,40,0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '4rem',
        maxWidth: '52rem',
        width: '100%'
      }}>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '2.8rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '1.2rem'
        }}>
          Lost in Space!
        </h2>

        <p style={{
          fontSize: '1.7rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: '3.2rem'
        }}>
          The page you're looking for has drifted into another galaxy.
          {error?.data && (
            <span style={{
              display: 'block',
              marginTop: '1.2rem',
              fontSize: '1.4rem',
              color: 'var(--text-muted)',
              fontFamily: 'monospace',
              background: 'rgba(255,255,255,0.04)',
              padding: '0.8rem 1.2rem',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              {error.data}
            </span>
          )}
        </p>

        <div style={{ display: 'flex', gap: '1.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <NavLink to="/">
            <button style={{ margin: 0, fontSize: '1.5rem' }}>
              <FaHome />
              <span>Go Home</span>
            </button>
          </NavLink>

          <button
            onClick={() => window.history.back()}
            style={{
              margin: 0,
              fontSize: '1.5rem',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.12)'
            }}
          >
            <FaArrowLeft />
            <span>Go Back</span>
          </button>
        </div>
      </div>

      {/* Inline keyframes via style tag */}
      <style>{`
                @keyframes glitchPulse {
                    0%, 100% { filter: drop-shadow(0 0 40px rgba(0,212,255,0.3)); }
                    50% { filter: drop-shadow(0 0 80px rgba(0,212,255,0.6)) drop-shadow(0 0 120px rgba(139,92,246,0.3)); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(-5deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
            `}</style>
    </div>
  );
};
