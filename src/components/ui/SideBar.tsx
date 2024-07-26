import { NavLink } from './Buttons';

const SideBar = () => {
  return (
    <div className="flex min-h-full w-64 flex-col gap-4 bg-indigo-100 px-6 py-8">
      <NavLink href="/extensions">Extensions</NavLink>
      <NavLink href="/">Rating</NavLink>
      <NavLink href="/">Score</NavLink>
      <NavLink href="/">Type</NavLink>
      <NavLink href="/">Extensions</NavLink>
      <NavLink href="/">Extensions</NavLink>
    </div>
  );
};

export default SideBar;
