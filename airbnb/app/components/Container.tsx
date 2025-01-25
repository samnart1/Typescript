interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div
      className="
      max-w-[2520px]
    "
    >
      {children}
    </div>
  );
}
