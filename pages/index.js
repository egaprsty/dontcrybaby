import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div className="font-serif bg-black">
      <Head>
        <title>Ega Prasetya</title>
      </Head>
      <NextSeo 
        title="Ega Prasetya"
        description="A fullstack developer, gamer, and human metronome who like to share about technologies"
      />
      <div className="space y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
        <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
            <div className="flex mt-8">
              
              <Image
                className="rounded-full"
                src="/ega.jpg"
                width={50}
                height={50}
              />
              
              <h1 className="ml-3 mt-3 text-gray-400">@egaprsty</h1>
              </div>
              <br/>
                                  
              <h1 className="mt-10 text-center text-xl font-bold font-mono text-gray-200">INFORMATION</h1>
               
                 <br/>
                  <div className="flex justify-center">
                  <Link href="/corona19"> 
                    <button className="border-2 border-purple-500 text-gray-500 bg-white-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-xl mr-3 pt-4 pb-4">
                      COVID WORLD
                </button>
              </Link>
              <Link href="/covidClp"> 
                    <button className="border-2 border-purple-500 text-gray-500 bg-white-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-xl pt-4 pb-4">
                      COVID CILACAP
                </button>
              </Link>
            </div>
                 <br/>
                 <br/>

              <div className="flex justify-center">
                <h1 className="font-bold text-xl font-mono text-gray-200">SCHOOL AT MAJENANG</h1>
                </div>
                <br/>
                <div className="flex flex-no-wrap justify-center divide-x divide-purple-500">
                  <Link href="/esde"> 
                    <button className="text-green-500 bg-white-300 hover:bg-blue-700 rounded-lg pr-12 pl-12 shadow-xl mr-3 pt-5 pb-5">
                      SD
                </button>
              </Link>
              <Link href="/smp"> 
                    <button className="text-green-500 bg-white-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-xl mr-3">
                      SMP
                </button>
              </Link>
              <Link href="/smk"> 
                    <button className="text-green-500 bg-white-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-xl">
                     SMK
                </button>
              </Link>
            </div>
                 <br/>
                  <br/>

                <div className="text-center">
                <Link href="/apidev">
                  <button className="border-2 border-purple-500 rounded-lg pr-10 pl-10 pt-3 pb-3 shadow-xl text-white"> 
                      API FOR DEVELOPERS
                  </button>
                </Link>
              </div>
              <br />


      <h1 className="text-center text-gray-400">Made With Love @egaprsty</h1>
       <br />
       <br />
       <br />
       <br /> 
        
        </div>
      </header>
    </div>
  </div>
  )
}

export default Home;

