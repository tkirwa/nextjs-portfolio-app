// app/sections/Footer.tsx

"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding / Copy */}
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Tonny Kirwa. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-blue-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>

          {/* WhatsApp Link with SVG */}
          <a
            href="https://wa.me/254705612512"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width={18}
              height={18}
            >
              <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 2.111.554 4.085 1.521 5.799L2 22l4.28-1.406A9.947 9.947 0 0012.004 22C17.531 22 22 17.523 22 12.004 22 6.477 17.523 2 12.004 2zm5.88 14.544c-.21.588-1.21 1.102-1.705 1.17-.449.062-1.01.09-2.51-.535-2.548-1.006-4.193-3.505-4.32-3.657-.126-.152-1.02-1.37-1.02-2.61 0-1.24.656-1.85.886-2.104.228-.254.5-.32.664-.32.163 0 .323.002.464.002.147 0 .344-.056.526.414.182.47.617 1.622.672 1.74.055.12.09.258.03.417-.06.157-.87 2.414-.95 2.637-.082.224-.138.486.29.79.428.303.758.488 1.003.626.423.227.644.192.958.116.312-.075 1.014-.414 1.156-.818.142-.403.18-.744.128-.818-.054-.073-.198-.119-.418-.207-.218-.087-1.29-.634-1.49-.707-.2-.073-.342-.11-.473-.19-.128-.08-.218-.18-.03-.332.186-.152.831-.812.884-.876.053-.065.106-.105.16-.16.054-.054.09-.09.143-.144.053-.054.088-.12.132-.18.043-.06.09-.128.134-.192.044-.064.082-.106.143-.143.062-.036.125-.07.186-.102.06-.032.107-.054.162-.077.055-.022.086-.03.13-.03s.114.018.164.037c.05.018.128.077.155.096.027.018.06.034.09.05.03.018.077.06.11.087.034.027.064.06.093.092.028.03.056.06.082.088.026.027.052.057.075.086.024.03.046.058.067.085.02.026.04.048.06.072.02.024.034.044.054.065.02.02.04.043.06.065.02.02.04.04.058.06.018.02.038.037.058.056.02.02.04.036.056.054.018.018.037.034.055.053.018.018.035.036.053.052.018.018.035.034.053.05.018.016.037.03.053.045.018.018.034.036.05.053.016.018.032.033.048.05.016.018.03.035.047.053.016.018.032.035.048.053.014.018.03.033.048.05.015.02.03.036.044.054.014.016.03.03.044.046.014.016.03.03.044.046.012.014.024.03.036.044.01.014.02.03.03.042.01.014.02.03.03.042.01.01.02.018.03.03.01.012.02.022.03.032.008.012.014.02.02.024.03.008.01.014.02.022.03.008.01.014.02.02.024.03.008.01.014.02.022.03.008.01.014.02.022.03.008.01.014.02.022.03.008.01.014.02.022.03.008.01.014.02.022.03.008.01.014.02.022.03.008.01.014.02.022.03.008.01.014.02.022.03z"/>
            </svg>
            <span className="text-sm">Chat</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
