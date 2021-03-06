import React, { Component } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { api } from '../../lib/api';
import ListHentais from '../../components/ListHentais';
import Layout from '../../components/Layout';

import styles from '../../styles/Hentais.module.css';

class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <Layout>
                <Head>
                    <title>{`Lista de hentais más vistos • ${process.env.NAME}`}</title>
                    <meta name="description" content={`Hentai Online Sub Español Gratis, mira los últimos capitulos de los hentais del momento sin ninguna restriccion subtitulados al español latino en ${process.env.NAME}`} />
                    <link rel="canonical" href={`${process.env.URL}/hentais`} />
                    <meta name="og:title" content={`Lista de hentais más vistos • ${process.env.NAME}`} />
                    <meta name="og:description" content={`Hentai Online Sub Español y Español Latino Gratis, mira los últimos capitulos de los hentais del momento sin ninguna restriccion subtitulados al español latino en ${process.env.NAME}`} />
                    <meta name="og:url" content={`${process.env.URL}/hentais`} />
                    <meta name="og:locale" content="es_LA" />
                    <meta name="og:type" content="website" />
                    <meta name="og:image" content="https://i.imgur.com/Iof3uSm.jpg" />
                    <meta property="og:image:width" content="265" />
			        <meta property="og:image:height" content="265" />
                    <meta itemProp="image" content="https://i.imgur.com/Iof3uSm.jpg" />
                </Head>
                <main className={styles.container}>
                    <ListHentais title={'Hentais más vistos'} hentais={data?.being_watched}/>
                </main>
            </Layout>
        );
    }
}

export async function getStaticProps() {
    const res = await api.get(`hentai/more-view`);
    return {
        props: {
            data: res.data,
        },
        revalidate: 1
    }
}

export default withRouter(index);