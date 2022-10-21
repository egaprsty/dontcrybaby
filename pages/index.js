import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const res = await fetch('http://vaksin-jakarta.yggdrasil.id/')
  const data = await res.json();

  return{
      props: { ninjas:data }
  }
}

const Sweet = ({ ninjas }) => {
  return (
    <div className="font-serif bg-black">
      <Head>
        <title>Ega Prasetya</title>
      </Head>
      <NextSeo 
        title="Ega Prasetya"
        description="A fullstack developer, gamer, and human metronome who like to share about technologies"
      />
          <div className="sm:px-80">
              <div className="flex pt-10 ml-5 sticky top-0">
              <Image
                className="rounded-full"
                src="/ega.jpg"
                width={50}
                height={50}
              />
              
              <h1 className="ml-3 mt-3 text-gray-400">@egaprsty</h1>
              </div>
              <br/>
              <br/>

              <div className="border-0 border-gray-100 bg-black-100 shadow-lg rounded-lg ml-3 mr-5">
                  <div className="pt-7 ml-3 text-3xl text-gray-300">
                      Ega Prasetya
                  </div>
                  <br/>
                    <div className="text-gray-300 p-3"> 
                    A full stack software developer, crafting with Typescript, React, and GoLang at the moment. Into hackathons, strategy games, and building useful products.
                    </div>
                  <br/>
                   <Link href="https://github.com/egaprsty">
                  <div className="ml-3 mr-4 bg-green-600 text-center cursor-pointer hover:bg-gray-400 p-1 rounded-lg">
                      <h1 className="font-semibold text-white">Contact</h1>
                  </div>
                  </Link>
                    <br/>
              </div>

              <div className="text-white p-5">
                <h1 className="text-xl text-gray-300 font-mono">PROJECTS</h1>
              </div>
                                  
              <h1 className="mt-10 text-xl ml-5  font-mono text-gray-300">COVID</h1>
               
                 <br/>
                  <div className="flex ml-5">
                  
              <Link href="/covidClp"> 
                    <button className="mr-5 border-2 border-purple-500 text-gray-300 bg-white-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-xl pt-4 pb-4">
                      COVID CILACAP
                </button>
              </Link>
            </div>
                 <br/>
                 <br/>
<br />

             
        <h1 className="text-gray-300 ml-5 text-xl font-mono">DATA VAKSINASI DKI JAKARTA</h1>
        <br/>
        {ninjas.map(ninja => (
          <div key={ninja}>
            <div className="ml-5 text-sm text-gray-300 mt-2 border border-gray p-2 text-center rounded-lg mr-5">
              <h3 className="text-gray-300"> {ninja.kode_lokasi_vaksinasi} </h3>
              <h3 className="text-gray-300"> {ninja.nama_lokasi_vaksinasi} </h3>
              <h3 className="text-gray-300"> {ninja.alamat_lokasi_vaksinasi} </h3>
            </div>
          </div>
        ))}
      <br/>


      <h1 className="text-center text-gray-400">Made With Love @egaprsty</h1>
       <br />
       <br />
       <br />
       <br /> 
</div>
       </div>
  )
}

export default Sweet;

