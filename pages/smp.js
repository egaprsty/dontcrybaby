import Link from 'next/link';
import Head from 'next/head';
import {NextSeo} from 'next-seo';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/dataSmp')
    const data = await res.json();

    return{
        props: { ninjas:data }
    }
}

const Yea = ({ ninjas }) => {
    return(
        <div className="bg-gray-200">
            <Head>
                <title>SMP INFORMATION</title>
            </Head>
            <NextSeo 
                title="SMP Majenang"
                description="Informasi mengenai Sekolah Menengah Pendidikan yang ada di seluruh Majenang, semoga bermanfaat."
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
            {ninjas.map(ninja => (
                <div key={ninja}>
                    <div>
                    <div className="shadow ml-5 text-center rounded-full mr-3 pr-5 pl-5 bg-purple-400 mt-5">
                        <h3 className="text-yellow-100 font-bold">{ ninja.name }</h3>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse justify-center">
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-gray-100 mt-5">{ninja.status}</h3>
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-gray-100 mt-5">{ninja.alamat}</h3>
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-gray-100 mt-5">{ninja.kelurahan}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Yea;
