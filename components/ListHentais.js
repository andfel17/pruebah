import React, { Component } from 'react';
import HentaiCard from './HentaiCard';

import styles from '../styles/ListHentais.module.css';

export default class ListHentais extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { hentais, title, filters, paginate } = this.props;
        return (
            <div className={styles.box}>
                {title && (
                    <h1>
                        <span className={styles.border}>{title}</span>
                    </h1>
                )}
                { filters }
                { hentais?.length > 0 
                ?   <div className={styles.listHentais}>
                        {hentais?.map((item, idx) => (
                            <HentaiCard data={item} key={idx} />
                        ))}
                    </div>
                :   <div className={styles.message}>No se encontraron hentais</div>
                }
                { paginate }
            </div>
        );
    }
}
