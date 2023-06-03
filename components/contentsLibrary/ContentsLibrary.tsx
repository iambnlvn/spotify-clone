interface ContentLibraryProps {
  children: React.ReactNode;
}
const ContentLibrary: React.FC<ContentLibraryProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4">
      {children}
    </div>
  );
};

export default ContentLibrary;
