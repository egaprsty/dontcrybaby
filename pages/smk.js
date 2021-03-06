import Link from 'next/link';
import Head from 'next/head';
import {NextSeo} from 'next-seo';

export const getServerSideProps = async () => {
    const res = await fetch(`http://egaprsty.vercel.app/api/dataSmk`)
    const data = await res.json();

    return{
        props: { sevens:data }
    }
}

const Oh = ({ sevens }) => {
    return(
        <div className="bg-gray-200">
            <Head>
                <title>SMK/A INFORMATION</title>
            </Head>
            <NextSeo 
                title="SMK Majenang"
                description="Informasi mengenai Sekolah Menengah Atas/Kejuruan yang ada di seluruh Majenang, semoga bermanfaat."
            />
            <br/>
            <Link href="/">
                <button className="ml-5 pr-2 pl-2 bg-purple-300 hover:bg-blue-200 rounded-lg fixed">
                    Go Back
                </button>
            </Link>
            <hr/>
            <br/>
            <h1 className="text-center font-bold">SCHOOL INFORMATION</h1>
            {sevens.map(seven => (
                <div key={seven}>
                    <div>
                    <div className="shadow ml-5 text-center rounded-full mr-3 pr-5 pl-5 bg-purple-200 mt-5">
                        <h3 className="">{ seven.name }</h3>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse justify-center">
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-gray-100 mt-5">{seven.status}</h3>
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-gray-100 mt-5">{seven.alamat}</h3>
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-gray-100 mt-5">{seven.kelurahan}</h3>
                    </div>
                </div>
            ))}
            <br/>
                <h1 className="text-center font-gray-100">Made with Love @egaprsty</h1>
        </div>
    )
}

export default Oh;
