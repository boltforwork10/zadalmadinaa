type LtrNumberProps = {
  children: React.ReactNode;
  className?: string;
};

export default function LtrNumber({ children, className = '' }: LtrNumberProps) {
  return (
    <span dir="ltr" className={className} style={{ unicodeBidi: 'plaintext' }}>
      {children}
    </span>
  );
}
