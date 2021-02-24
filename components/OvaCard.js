import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imageOva, imgHentai, slugOva, slugHentai } from '../helpers/Functions';
import { getFromNow } from '../helpers/Strings';

import styles from '../styles/OvaCard.module.css';

export default class OvaCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ova } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.holder}>
                    <div className={styles.overlay}>
                        <span className={styles.time}>{ getFromNow(ova?.created_at) }</span>
                        <Link href={slugOva(ova?.hentai?.slug, ova?.number)}>
                            <a className={styles.play} alt={`${ova?.hentai?.name} ${ova?.number}`} title={`${ova?.hentai?.name} ${ova?.number}`}>
                                <svg viewBox="0 0 24 24"><path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg>
                            </a>
                        </Link>
                    </div>
                    <Image 
                        className="poster"
                        alt={`${ova?.hentai?.name} ${ova?.number}`}
                        height="auto"
                        width="auto"
                        layout="responsive"
                        loading={"lazy"}
                        src={imageOva(ova?.hentai?.img_ova) }/>
                </div>
                <div className={styles.text}>
                    <Link href={slugOva(ova?.hentai?.slug, ova?.number)}>
                        <a className={styles.title} alt={`${ova?.hentai?.name} ${ova?.number}`} title={`${ova?.hentai?.name} ${ova?.number}`}>
                            <div className={styles.limit}>{ova?.hentai?.name}</div>
                            <span className={styles.ova}>{`Ova ${ova?.number}`}</span>
                        </a>
                    </Link>
                </div>
            </div>
        );
    }
}
