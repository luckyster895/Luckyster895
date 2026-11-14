import { certs, profile } from "@/lib/data";

// The profile written as a TypeScript object. Each design styles the
// .code, .kw, .str, .dim and .caret classes itself.
export default function ProfileCode({ className = "" }: { className?: string }) {
  return (
    <pre className={`code ${className}`} aria-label="Profile summary written as code">
      <span className="kw">const</span> abhinav = {"{\n"}
      {"  "}role: <span className="str">&quot;{profile.role}&quot;</span>,{"\n"}
      {"  "}certified: <span className="str">&quot;{certs.length}X Salesforce&quot;</span>,{"\n"}
      {"  "}builds: [<span className="str">&quot;Marketing Cloud&quot;</span>, <span className="str">&quot;Data Cloud&quot;</span>,{"\n"}
      {"           "}
      <span className="str">&quot;Agentforce&quot;</span>],{"\n"}
      {"  "}writes: [<span className="str">&quot;SSJS&quot;</span>, <span className="str">&quot;AMPscript&quot;</span>, <span className="str">&quot;SQL&quot;</span>],{"\n"}
      {"  "}roots: <span className="str">&quot;cybersecurity&quot;</span>,{"\n"}
      {"  "}location: <span className="str">&quot;{profile.location}&quot;</span>,{"\n"}
      {"};\n\n"}
      <span className="dim">{"// secure by default"}</span>
      {"\n"}
      <span className="kw">export default</span> abhinav; <span className="caret" aria-hidden />
    </pre>
  );
}
