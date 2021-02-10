import Link from 'next/link';
import Head from 'next/head';
import {NextSeo} from 'next-seo';

export const getStaticProps = async () => {
    const res = await fetch('https://api.kawalcorona.com/')
    const data = await res.json();

    return{
        props: { ninjas:data }
    }
}

const Ninjas = ({ ninjas }) => {
    return(
        <div className="bg-gray-200">
            <Head>
                <title>Realtime Data COVID</title>
            </Head>
            <NextSeo 
                title="Realtime Data COVID"
                description="This is realtime data COVID Application, i get the data from API Kawal Corona Indonesia, so thx."
            />
            <br/>
            <Link href="/">
                <button className="ml-5 pr-2 pl-2 bg-purple-300 hover:bg-blue-200 rounded-lg">
                    Go Back
                </button>
            </Link>
            <hr/>
            <br/>
            <h1 className="text-center font-bold">REALTIME DATA COVID19</h1>
            {ninjas.map(ninja => (
                <div key={ninja}>
                    <div>
                    <div className="shadow ml-5 text-center rounded-full mr-3 pr-5 pl-5 bg-blue-200 mt-5">
                        <h3>{ ninja.attributes.Country_Region }</h3>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse justify-center">
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-yellow-200 mt-5">{ ninja.attributes.Confirmed}</h3>
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-red-200 mt-5">{ ninja.attributes.Deaths }</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Ninjas;