
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/9909823743" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center"
    >
      <div className="bg-glass border border-white/10 px-4 py-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 pointer-events-none">
        <span className="text-xs font-bold tracking-wider whitespace-nowrap">Chat with Atharva</span>
      </div>
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/20 transition-transform group-hover:scale-110 active:scale-95">
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.576-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.105.007.25.043.381.346.13.316.448 1.09.488 1.169.04.079.066.173.015.274-.05.101-.077.159-.153.246-.077.087-.162.194-.231.26-.07.065-.142.135-.061.271.081.136.358.591.77 1.001.529.527.973.689 1.112.76.139.072.221.06.303-.035s.352-.411.446-.548c.094-.137.188-.115.317-.07.129.045.819.386.96.456.141.07.234.105.268.163.037.058.037.334-.107.739z" />
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 2.17.693 4.193 1.884 5.86L2.3 22.1l4.417-1.161A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.225-1.189l-.304-.18-2.618.688.7-2.556-.197-.313A7.962 7.962 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
