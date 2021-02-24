import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imageOva, slugOva } from '../helpers/Functions';

import styles from '../styles/OvaCard.module.css';

export default class HentaiOvaCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { hentai, ova } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.holder}>
                    <div className={styles.overlay}>
                        <Link href={slugOva(hentai?.slug, ova?.number)}>
                            <a className={styles.play} alt={`${hentai?.name} ${ova?.number}`} title={`${hentai?.name} ${ova?.number}`}>
                                <svg viewBox="0 0 24 24"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>
                            </a>
                        </Link>
                    </div>
                    <Image 
                        className="poster"
                        alt={`${hentai?.name} ${ova?.number}`}
                        height="auto"
                        width="auto"
                        layout="responsive"
                        loading={"lazy"}
                        src={imageOva(hentai?.img_ova) }/>
                </div>
                <div className={styles.text}>
                    <Link href={slugOva(hentai?.slug, ova?.number)}>
                        <a className={styles.title} alt={`${hentai?.name} ${ova?.number}`} title={`${hentai?.name} ${ova?.number}`}>
                            <div className={styles.limit}>{hentai?.name}</div>
                            <span className={styles.ova}>{`Ova ${ova?.number}`}</span>
                        </a>
                    </Link>
                </div>
            </div>
        );
    }
}
