import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import StoreProvider from "./StoreProvider.js";
import NavComplete from "@/components/Nav/NavComplete";
import { Toaster } from "@/components/ui/toaster"
import DataSetter from "@/lib/DataSetter";
// import { Toaster } from "react-hot-toast";




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
     <DataSetter/>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
         {/* <EmailVerificationButton/> */}
      <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
            <NavComplete/>
                {children}
                
            </main>
                <Toaster/>
          
            </ThemeProvider>
    </StoreProvider>
      </body>
    </html>

 
  );
}
