import "./globals.css";
import { poppins } from "./utils/font";
import 'regenerator-runtime/runtime';


export const metadata = {
  title: "ONDC",
  description: "Future is here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="max-w-[500px] mx-auto">
        {children}
        </main>
        </body>
    </html>
  );
}
