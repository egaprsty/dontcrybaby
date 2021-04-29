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
              
              <h1 className="ml-3 mt-3 text-gray-400">@LazyEngineer</h1>
              </div>
              <br/>
                                  
              <h1 className="mt-10 text-center font-bold">INFORMATION</h1>
               <hr/>
                 <br/>
                  <div className="flex justify-center">
                  <Link href="/corona19"> 
                    <button className="bg-purple-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-lg mr-3 pt-4 pb-4">
                      COVID 19 IN THE WORLD
                </button>
              </Link>
              <Link href="/covidClp"> 
                    <button className="bg-purple-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-lg pt-4 pb-4">
                      COVID 19 IN KAB CILACAP
                </button>
              </Link>
            </div>
                 <br/>
                 <br/>

              <div className="flex justify-center">
                <h1 className="font-bold">SCHOOL INFORMATION AT MAJENANG</h1>
                </div>
                <br/>
                <div className="flex flex-no-wrap justify-center">
                  <Link href="/esde"> 
                    <button className="bg-yellow-100 hover:bg-blue-700 rounded-lg pr-12 pl-12 shadow-lg mr-3 pt-5 pb-5">
                      SD
                </button>
              </Link>
              <Link href="/smp"> 
                    <button className="bg-yellow-100 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-lg mr-3">
                      SMP
                </button>
              </Link>
              <Link href="/smk"> 
                    <button className="bg-yellow-100 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-lg">
                     SMK
                </button>
              </Link>
            </div>
                 <br/>
                  <br/>

                <h1 className="text-center font-bold">CONTACT ME</h1>
                  <br/>
                    <div className="flex flex-wrap justify-center mr-3">
                      <svg className="animate-bounce w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
          </div>

                <div className="flex justify-center mr-3 bg-green-200 rounded-lg shadow-xl">
                  <div className="text-center px-4 py-2 m-2">
                    <Link href="https://github.com/egaprsty"><img src="/g.png" width={80} height={80}/></Link>
            </div>
                <div className="text-center py-2 m-2">
                  <Link href="https://instagram.com/svnberr"><img src="/ig.png" width={80} height={80}/></Link>
            </div>
                <div className="text-center px-4 py-2 m-2">
                  <Link href="https://facebook.com/rhfamili7"><img src="/fb.png" width={75} height={80}/></Link>
            </div>
          </div>  
      <br/>
      <h1 className="text-center font-gray-100">Made With Love @egaprsty</h1>
        </div>
      </header>
    </div>
  </div>
  )
}

export default Home;

