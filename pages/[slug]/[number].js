import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Iframe from 'react-iframe';
import { api } from '../../lib/api';
import Layout from '../../components/Layout';
import Comments from "../../components/Comments";
import { slugOva, slugHentai, imgHentai, imgOvaHentai } from '../../helpers/Functions';
import { getUrlVideo } from '../../helpers/Strings';

import styles from '../../styles/Ova.module.css';

export default class number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iframe: null,
            server: 0,
            random: 0,
            id: this.props.data.id
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.data.id !== prevState.id){
            return {
                iframe: nextProps.data?.players[0] ? getUrlVideo(nextProps.data?.players[0]) : null,
                server: 0,
                random: prevState.random + 1,
                id: nextProps.data.id
            }
        }else{
            if(prevState.iframe == null){
                return {
                    iframe: nextProps.data?.players[0] ? getUrlVideo(nextProps.data?.players[0]) : null
                }
            }else{
                return prevState;
            }
        }
        
    }

    handleChange = (e) => {
        const { data } = this.props;
        if(e.target.name === 'server'){
            this.setState({
                server: e.target.value,
                iframe: getUrlVideo(data?.players[e.target.value])
            })
        }
    }

    videoPlayer = () => {
        const { data } = this.props;
        const { iframe, random, server } = this.state;
        return(
            <div className={styles.videoPlayer}>
                { iframe && (
                    <>
                        <div className={styles.options}>
                            <div className={styles.type}>
                                <label htmlFor={"server"}>Servidor</label>
                                <select name={"server"} value={server} id={"server"} onChange={this.handleChange}>
                                    {data?.players?.map((item, idx) => (
                                        <option value={idx} key={idx}>{item?.server?.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={styles.video}>
                            <Iframe key={random} allow={"fullscreen"} url={iframe} display="initial"/>
                        </div>
                    </>
                )}
            </div>
        )
    }

    navCaps = () => {
        const { data } = this.props;
        return (
            <div className={styles.navCaps}>
                <div className={styles.column}>
                    <div className={styles.info}>
                        <Link href={slugHentai(data?.hentai?.slug)}>
                        <a className={styles.cover}>
                            <Image 
                                className={styles.cover}
                                alt={`${data?.hentai?.name} ${data?.number}`}
                                height="auto"
                                width="auto"
                                layout="responsive"
                                loading={"lazy"}
                                src={imgHentai(data?.hentai?.img_hentai) }/>
                        </a> 
                        </Link>
                        <div className={styles.details}>
                            <div className={styles.info}>
                                <h1>
                                    <Link href={slugHentai(data?.hentai?.slug)}>
                                        <a>{data?.hentai?.name}</a>
                                    </Link>
                                </h1>
                                <span className={styles.currentEp}>{`Ova ${data?.number}`}</span>
                            </div>
                            <p className={styles.desc}>{data?.hentai?.synopsis?.slice(0,50)}</p>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        { data?.anterior && (
                            <Link href={slugOva(data?.hentai?.slug, data?.anterior?.number)}>
                                <a className={styles.button}>
                                    <svg viewBox="0 0 24 24">
                                        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
                                    </svg>
                                    Ep. Anterior
                                </a>
                            </Link>
                        )}
                        { data?.hentai && (
                            <Link href={slugHentai(data?.hentai?.slug)}>
                                <a className={styles.button}>
                                    <svg viewBox="0 0 24 24">
                                        <path d="M7,13H21V11H7M7,19H21V17H7M7,7H21V5H7M2,11H3.8L2,13.1V14H5V13H3.2L5,10.9V10H2M3,8H4V4H2V5H3M2,17H4V17.5H3V18.5H4V19H2V20H5V16H2V17Z"></path>
                                    </svg>
                                </a>
                            </Link>
                        )}
                        { data?.siguiente && (
                            <Link href={slugOva(data?.hentai?.slug, data?.siguiente?.number)}>
                                <a className={styles.button}>
                                    Ep. Siguiente
                                    <svg viewBox="0 0 24 24">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                                    </svg>
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { data } = this.props;
        return (
            <Layout>
                <Head>
                    <title>{`Ver ${data?.hentai?.name} Ova ${data?.number} Sub Español Latino en HD Online • ${process.env.NAME}`}</title>
                    <meta name="description" content={`Hentai ${data?.hentai?.name} capitulo ${data?.number} Sub Español Latino, ver online y descargar en hd 720p sin ninguna limitación`} />
                    <link rel="canonical" href={`${process.env.URL}${slugOva(data?.hentai?.slug,data?.number)}`} />
                    <meta name="og:title" content={`Ver ${data?.hentai?.name} Ova ${data?.number} Sub Español Latino en HD Online • ${process.env.NAME}`} />
                    <meta name="og:description" content={`Hentai ${data?.hentai?.name} capitulo ${data?.number} Sub Español Latino, ver online y descargar en hd 720p sin ninguna limitación`} />
                    <meta name="og:url" content={`${process.env.URL}${slugOva(data?.hentai?.slug,data?.number)}`} />
                    <meta name="og:locale" content="es_LA" />
                    <meta name="og:type" content="video.ova" />
                    <meta name="og:image" content={imgOvaHentai(data?.hentai?.banner)} />
                    <meta property="og:image:width" content="552" />
			        <meta property="og:image:height" content="310" />
                    <meta itemProp="image" content={imgOvaHentai(data?.hentai?.banner)} />
                </Head>
                <main className={styles.container}>
                    { this.videoPlayer() }
                    { this.navCaps() }
                    <Comments title={`${data?.hentai?.name} Ova ${data?.number}`} url={`${process.env.URL}${slugOva(data?.hentai?.slug,data?.number)}`} id={`${data?.hentai?.slug}-${data?.number}`}/>
                </main>
            </Layout>
        );
    }
}

export async function getServerSideProps(context) {
    try {
        const res = await api.get(`ovas/${context.params.slug}/${context.params.number.replace('ova-','')}`);
        let isMobileView = (context.req 
            ? context.req.headers['user-agent']
            : navigator.userAgent
        ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
        if(Boolean(isMobileView) === false){
            res.data.players = res.data.players.filter(function(item){
                if(item.server.title === 'Archive'){
                    return false;
                }else{
                    return true;
                }
            })			
        }
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
