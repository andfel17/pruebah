import React, { Component } from 'react';
import OvaCard from './OvaCard';

import styles from '../styles/ListOvas.module.css';

export default class ListOvas extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ovas } = this.props;
        return (
            <div className={styles.box}>
                <h1>
                    <span className={styles.border}>Ovas recientes</span>
                </h1>
                <div className={styles.listOvas}>
                {ovas?.map((ova, idx) => (
                    <OvaCard ova={ova} key={idx} />
                ))}
                </div>
            </div>
        );
    }
}
