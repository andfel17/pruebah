import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imageHentaiSearch, slugHentai } from '../helpers/Functions';

import styles from '../styles/HentaiItemSearch.module.css';

export default class HentaiItemSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <Link href={slugHentai(data?.slug)}>
                <a className={styles.result} alt={data?.name} title={data?.name}>
                    <div className={styles.image}>
                        <Image 
                            className="poster"
                            alt={data?.name}
                            height="auto"
                            width="auto"
                            layout="responsive"
                            loading={"lazy"}
                            src={imageHentaiSearch(data?.img_hentai) }/>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.title}>{data?.name}</p>
                    </div>
                </a>
            </Link>
        );
    }
}
