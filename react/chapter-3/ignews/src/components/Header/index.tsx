import React from 'react';
import styles from './styles.module.scss';

import { SignInButton } from '../SignInButton';
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';

export function Header() {
    const { asPath } = useRouter()

    console.log(    )

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>

                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>

                    <ActiveLink href="/post" prefetch activeClassName={styles.active}>
                        <a>Posts</a>
                    </ActiveLink>

                </nav>

                <SignInButton />
            </div>
        </header>
    );
}