import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div className="font-serif">
      <Head>
        <title>SEVEN TECH</title>
      </Head>
      <NextSeo 
        title="SEVEN TECH"
        description="A fullstack developer, gamer, and human metronome who like to share about technologies"
      />
      <div className="space y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
        <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
            <div className="flex flex-no-wrap mt-8">
              <Image
                className="rounded-full"
                src="/ega.jpg"
                width={50}
                height={50}
              />
              
              <h1 className="ml-3 mt-3 text-gray-400">@SEVENTECH</h1>
              </div>
              <br/>
                                  
              <h1 className="mt-10 text-center text-2xl font-bold">INFORMATION</h1>
               
                 <br/>
                  <div className="flex justify-center">
                  <Link href="/corona19"> 
                    <button className="text-blue-500 bg-white-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-xl mr-3 pt-4 pb-4">
                      COVID 19 IN THE WORLD
                </button>
              </Link>
              <Link href="/covidClp"> 
                    <button className="text-blue-500 bg-white-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-xl pt-4 pb-4">
                      COVID 19 IN KAB CILACAP
                </button>
              </Link>
            </div>
                 <br/>
                 <br/>

              <div className="flex justify-center">
                <h1 className="font-bold text-2xl font-bold">SCHOOL AT MAJENANG</h1>
                </div>
                <br/>
                <div className="flex flex-no-wrap justify-center">
                  <Link href="/esde"> 
                    <button className="bg-purple-300 hover:bg-blue-700 rounded-lg pr-12 pl-12 shadow-lg mr-3 pt-5 pb-5">
                      SD
                </button>
              </Link>
              <Link href="/smp"> 
                    <button className="bg-purple-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-lg mr-3">
                      SMP
                </button>
              </Link>
              <Link href="/smk"> 
                    <button className="bg-purple-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-lg">
                     SMK
                </button>
              </Link>
            </div>
                 <br/>
                  <br/>

                <div className="text-center">
                <Link href="/apidev">
                  <button className="bg-white-200 rounded-lg pr-10 pl-10 pt-5 pb-3 shadow-xl"> 
                      API FOR DEVELOPERS
                  </button>
                </Link>
              </div>
              <br />


      <h1 className="text-center font-gray-100">Made With Love @egaprsty</h1>
        </div>
      </header>
    </div>
  </div>
  )
}

export default Home;

