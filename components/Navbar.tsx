'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import {
    signIn,
    signOut,
    useSession,
    getProviders,
    ClientSafeProvider,
    LiteralUnion,
} from 'next-auth/react';
import Logo from '@components/icons/Logo';
import LogoHorizontal from './icons/LogoHorizontal';
import { BuiltInProviderType } from 'next-auth/providers/index';
import TimesCircle from './icons/TimesCircle';

const Navbar = () => {
    const { data: session } = useSession();
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [providers, setProviders] = useState<Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null>(null);
    useEffect(() => {
        const prov = async () => {
            const res = await getProviders();
            setProviders(res);
        };
        prov();
    }, []);

    const toggleDropdownHanlder = useCallback(
        () => setToggleDropdown(prev => !prev),
        []
    );

    return (
        <nav className='fixed left-0 right-0 top-0 flex flex-row justify-between bg-white py-4 drop-shadow-xl'>
            <div className='container mx-auto relative px-4 md:px-0 flex justify-between items-center'>
                <Link href={'/'} className='flex text-4xl space-x-2'>
                    <Logo width={40} height={40} />
                    <div>
                        Share<span className='font-bold'>Quote</span>
                    </div>
                </Link>
                {/* Desctop nav */}
                <div className='hidden md:flex'>
                    {session?.user ? (
                        <div className='flex gap-5'>
                            <Link href={'/create-quote'} className='btn'>
                                Create Quote
                            </Link>
                            <button
                                className='btn btn_black'
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                Sign Out
                            </button>
                            <Link href={'/profile'} className=''>
                                <Image
                                    className='rounded-full border-black border-2'
                                    width={40}
                                    height={40}
                                    alt='profile'
                                    src={
                                        session.user.image || '/assets/user.jpg'
                                    }
                                />
                            </Link>
                        </div>
                    ) : (
                        <div className='flex space-x-4'>
                            <Link className='btn' href={'/signin'} type='button'>
                                Sign In
                            </Link>
                            <Link
                                className='btn btn_black'
                                href={'/signup'}
                                type='button'
                            >
                                Sign Up
                            </Link>
                            {/* {providers &&
                                Object.values(providers).map(provider => (
                                    <button
                                        type='button'
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                        className='btn btn_black'
                                    >
                                        {provider.id}
                                        {provider.name}
                                    </button>
                                ))} */}
                        </div>
                    )}
                </div>
                {/* Mobile btn */}
                {/* Mobile Navigation */}
                <div className='sm:hidden flex relative'>
                    {session?.user ? (
                        <div className='flex'>
                            <Image
                                // src={session?.user.image}
                                src={session.user.image || '/assets/user.jpg'}
                                width={37}
                                height={37}
                                className='rounded-full'
                                alt='profile'
                                onClick={toggleDropdownHanlder}
                            />

                            {toggleDropdown && (
                                <div className='dropdown'>
                                    <Link
                                        href='/profile'
                                        className='dropdown_link'
                                        onClick={toggleDropdownHanlder}
                                    >
                                        My Profile
                                    </Link>
                                    <Link
                                        href='/create-prompt'
                                        className='dropdown_link'
                                        onClick={toggleDropdownHanlder}
                                    >
                                        Create Quote
                                    </Link>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setToggleDropdown(false);
                                            signOut();
                                        }}
                                        className='mt-5 w-full btn btn_black'
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            {providers &&
                                Object.values(providers).map(provider => (
                                    <button
                                        type='button'
                                        key={provider.name}
                                        onClick={() => {
                                            signIn(provider.id);
                                        }}
                                        className='btn btn_black'
                                    >
                                        Sign in
                                    </button>
                                ))}
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
