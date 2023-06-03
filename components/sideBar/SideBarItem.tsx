import { twMerge } from "tailwind-merge";

interface SideBarItemProps {
  children: React.ReactNode;
  className?: string;
}
const SideBarItem: React.FC<SideBarItemProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge("h-fit w-full bg-neutral-900 rounded-lg", className)}
    >
      {children}
    </div>
  );
};

export default SideBarItem;
