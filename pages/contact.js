import Head from 'next/head';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LoginBtn from '../components/login-btn';
import ContactUs from '../components/contactUs';

export default function Contact() {
    const navigation = [
        { name: 'Fireplaces', href: '#' },
        { name: 'Decorative Trims', href: '#' },
        { name: 'Showrooms', href: '#' },
        { name: 'Contact', href: '/contact' },
    ];
    return (
        <div>
            <Head>
                <title>Masterpiece Fireplaces | Contact</title>
                <meta
                    name="description"
                    content="Contact Masterpiece Fireplaces: Gas-Free, Electric Fireplaces and Fireplace Trims"
                />
            </Head>
            <div className="relative pt-6 pb-16 sm:pb-24">
                <Popover>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <nav
                            className="relative flex items-center justify-between sm:h-10 md:justify-center"
                            aria-label="Global"
                        >
                            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 lg:relative">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="/">
                                        <span className="sr-only">
                                            Masterpiece Fireplaces
                                        </span>
                                        <Image
                                            src={'/masterpiecelogo-web.png'}
                                            width="920"
                                            height="64"
                                            className=""
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">
                                                Open main menu
                                            </span>
                                            <MenuIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex md:space-x-10">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="hidden md:relative md:flex md:items-center md:justify-end md:inset-y-0 md:left-10">
                                <span className="inline-flex rounded-md shadow">
                                    <LoginBtn />
                                </span>
                            </div>
                        </nav>
                    </div>
                </Popover>
            </div>
            <ContactUs />
        </div>
    );
}
