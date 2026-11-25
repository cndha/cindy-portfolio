type TextLinkProps = {
  word: string;          
  target: string;       
  newTab?: boolean;      
  className?: string;
};

export default function TextLink({
  word,
  target,
  newTab,
  className = "",
}: TextLinkProps) {
  const isExternal = target.startsWith("http");
  const openInNewTab = newTab ?? isExternal;

  return (
    <a
      href={target}
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
      className={`cursor-pointer hover:text-[#00945b] hover:underline hover:decoration-3 underline-offset-6 ${className}`} >
      {word}
      {openInNewTab && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}