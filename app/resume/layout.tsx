import Shell from "@/components/terminal/Shell";

// The resume uses the terminal design.
export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <Shell>{children}</Shell>;
}
