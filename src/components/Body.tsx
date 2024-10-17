const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`min-h-screen w-full flex flex-col bg-body-light dark:bg-body-dark`}
    >
      {children}
    </div>
  );
};

export default Body;
