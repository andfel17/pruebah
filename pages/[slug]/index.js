import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { api } from '../../lib/api';
import styles from '../../styles/Hentai.module.css';
import Layout from '../../components/Layout';
import { imgOvaHentai, imgHentai, slugHentai, slugGenre, nFormatter } from '../../helpers/Functions';
import { getStatusHentai, getDateAiredHentai } from '../../helpers/Strings';
import Comments from "../../components/Comments";
import HentaiOvaCard from '../../components/HentaiOvaCard';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    imgOva = () => {
        const { data } = this.props;
        return (
            <div className={styles.imgOva} style={{ backgroundImage: "url("+`${imgOvaHentai(data?.img_ova)}`+")"}}>
                <div className={styles.content} >
                    <div className={styles.column}>
                        <h1>{data?.name}</h1>
                        <div className={styles.genres}>
                            { data?.genres && data?.genres?.split(',')?.map((genre, idx) => (
                                <Link key={idx} href={slugGenre(genre)}>
                                    <a className={styles.item} title={genre.replace(/-/g,' ')}>{genre.replace(/-/g,' ')}</a>
                                </Link>
                            ))} 
                        </div>
                    </div>
                </div>
                <div className={styles.overlay}></div>
            </div>
        )
    }

    info = () => {
        const { data } = this.props;
        return(
            <div className={styles.info}>
                <div className={styles.cover}>
                    <Image
                        className="poster"
                        alt={data?.name}
                        height="auto"
                        width="auto"
                        layout="responsive"
                        loading={"lazy"}
                        src={imgHentai(data?.img_hentai)}/>
                </div>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.stats}>
                            <div title="Total view" className={styles.stat}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path>
                                </svg>
                                { nFormatter(data?.totalviews,1) }
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <small>Estado</small> {getStatusHentai(data?.status)}
                    </div>
                    <div className={styles.item}>
                        <small>Estreno</small> {getDateAiredHentai(data?.aired)}
                    </div>
                    <div className={styles.item}>
                        <small>Titulos Alternativos</small> {data?.name_alternative}
                    </div>
                </div>
            </div>
        );
    }

    details = () => {
        const { data } = this.props;
        return (
            <div className={styles.details}>
                <div className={styles.synopsis}>
                  <p>{data?.synopsis ? data?.synopsis : 'No hay sinopsis para este hentai'}</p>
                </div>
                <div className={styles.listOvas}>
                    {data?.ovas?.map((ova, idx) => (
                        <HentaiOvaCard hentai={data} ova={ova} key={idx} />
                    ))}
                </div>
                <Comments title={data?.name} url={`${process.env.URL}${slugHentai(data?.slug)}`} id={data?.slug}/>
            </div>
        );
    }

    render() {
        const { data } = this.props;
        return (
            <Layout>
                <Head>
                    <title>{`Ver ${data?.name} Sub Español Latino en HD Online • ${process.env.NAME}`}</title>
                    <meta name="description" content={`${(data?.synopsis?.length > 165 ? (data?.synopsis?.slice(0,165) + '...') : data?.synopsis)}`} />
                    <link rel="canonical" href={`${process.env.URL}${slugHentai(data?.slug)}`} />
                    <meta name="og:title" content={`Ver ${data?.name} Sub Español Latino en HD Online • ${process.env.NAME}`} />
                    <meta name="og:description" content={`${(data?.synopsis?.length > 165 ? (data?.synopsis?.slice(0,165) + '...') : data?.synopsis)}`} />
                    <meta name="og:url" content={`${process.env.URL}${slugHentai(data?.slug)}`} />
                    <meta name="og:locale" content="es_LA" />
                    <meta name="og:type" content="website" />
                    <meta name="og:image" content={imgHentai(data?.img_hentai)} />
                    <meta property="og:image:width" content="552" />
			        <meta property="og:image:height" content="310" />
                    <meta itemProp="image" content={imgHentai(data?.img_hentai)} />
                </Head>
                <main className={styles.container}>
                    { this.imgOva() }
                    <div className={styles.contentHentai}>
                        { this.info() }
                        { this.details() }
                    </div>
                </main>
            </Layout>
        );
    }
}

export async function getServerSideProps(context) {
    try {
        const res = await api.get(`hentai/${context.params.slug}`);
        return {
            props: { 
                data: res.data 
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
