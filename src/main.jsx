import './styles.css';

const rootElement = document.getElementById('root');

function showBootError(error) {
  const message = error?.stack || error?.message || String(error);
  rootElement.innerHTML = `
    <div style="min-height:100vh;padding:32px;font-family:Arial, sans-serif;background:#06101C;color:white">
      <div style="max-width:900px;margin:0 auto;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:24px">
        <p style="margin:0 0 8px;color:#0BA1A2;font-weight:700">Error al iniciar el portafolio</p>
        <h1 style="margin:0 0 16px;font-size:28px">React no pudo renderizar la aplicacion</h1>
        <pre style="white-space:pre-wrap;line-height:1.5;background:rgba(0,0,0,.28);padding:16px;border-radius:12px;overflow:auto">${message}</pre>
      </div>
    </div>
  `;
}

window.addEventListener('error', (event) => showBootError(event.error || event.message));
window.addEventListener('unhandledrejection', (event) => showBootError(event.reason));

try {
  const [{ default: React }, { default: ReactDOM }, { default: App }] = await Promise.all([
    import('react'),
    import('react-dom/client'),
    import('./App.jsx')
  ]);

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  showBootError(error);
}
