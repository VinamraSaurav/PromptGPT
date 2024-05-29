import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import StoreProvider from "./StoreProvider.js";
import NavComplete from "@/components/Nav/NavComplete";
import { Toaster } from "@/components/ui/toaster"



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PromptGPT",
  description: "AI Powered (Gemini) - responds to prompts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
<StoreProvider>
     
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
         
            <NavComplete/>
                {children}
                <Toaster/>
            </main>
            </ThemeProvider>
    </StoreProvider>
      </body>
    </html>

 
  );
}
