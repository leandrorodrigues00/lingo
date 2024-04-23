interface LessonLayoutProps {
  readonly children: React.ReactNode;
}

export default function LessonLayout({ children }: LessonLayoutProps) {
  return (
    <>
      <div className="flex h-full flex-col">
        <div className="flex h-full w-full flex-col">{children}</div>
      </div>
    </>
  );
}
