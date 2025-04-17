'use client'

import React from 'react';
import { useBrand } from '@/context/brand'
import { getBrandConfig } from '@/utils/getBrandConfig'

import { Button } from '../Button';
import './header.css';

type User = {
    name: string;
};

export interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}

export default function Header({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) {
    const brand = useBrand()
    const config = getBrandConfig(brand)
    const { logo, title, links } = config

    return (
        <header>
            <div className="storybook-header">
                <div>
                    <img src={logo} alt={`${brand} logo`} />
                    <h1>{title}</h1>
                </div>
                <div>
                    {user ? (
                        <>
                            <span className="welcome">
                                Welcome, <b>{user.name}</b>!
                            </span>
                            <Button size="small" onClick={onLogout} label="Log out" />
                        </>
                    ) : (
                        <>
                            <Button size="small" onClick={onLogin} label="Log in" />
                            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
                        </>
                    )}
                </div>
            </div>
            <nav>
                <ul>
                    {links.map((link: { href: string; label: string }) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}