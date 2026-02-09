import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, to, type }) {
  const base =
    'focus:inline-none text-sm mt-5 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 sm:px-6 sm:py-4';
  const style = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-3 md:px-5 md:py-2.4 text-xs',
    secondary:
      'focus:inline-none mt-5 inline-block rounded-full bg-transperant px-4 py-2 font-semibold tracking-wide uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 text-stone-300 border border-stone-400  focus:bg-stone-300 focus:ring-offset-2 sm:px-6 sm:py-4',
  };
  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  return <button className={style[type]}>{children}</button>;
}

export default Button;
