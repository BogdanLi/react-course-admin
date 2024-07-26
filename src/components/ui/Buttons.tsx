import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const location = useLocation();

  const isActive = location.pathname === href;

  return (
    <Link
      className={`rounded-xl px-6 py-3 transition-all duration-150 ${isActive ? 'bg-indigo-600 text-indigo-50' : 'bg-slate-100 text-indigo-600 hover:bg-slate-200'}`}
      to={href}
    >
      {children}
    </Link>
  );
};
