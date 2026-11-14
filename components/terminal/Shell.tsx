import { IBM_Plex_Mono, Space_Mono } from "next/font/google";
import "@/app/terminal/terminal.css";

const plex = IBM_Plex_Mono({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600"] });
const space = Space_Mono({ variable: "--font-space", subsets: ["latin"], weight: ["400", "700"] });

// Wrapper for every page (the home page and the resume): fonts, tokens and
// the dark-by-default theme.
export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`v-term ${plex.variable} ${space.variable}`}>
      {children}
    </div>
  );
}
