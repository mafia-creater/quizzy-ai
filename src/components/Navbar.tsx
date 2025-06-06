import { getAuthSession } from '@/lib/nextauth';
import Link from 'next/link';
import React from 'react';
import SigninButton from './ui/SigninButton';
import UserAccountNav from './UserAccountNav';
import { ThemeToggle } from './ThemeToggle';

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 bg-[var(--background)] text-[var(--foreground)] z-[10] h-fit border-b border-[var(--border)] py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-[var(--foreground)] px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px]">
            Quizzyy
          </p>
        </Link>

        {/* Right Section */}
        <div className="flex items-center">
          <ThemeToggle className="mr-3" />
          <div className="flex items-center">
            {session?.user ? <UserAccountNav user={session.user} /> : <SigninButton text="Sign in" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
