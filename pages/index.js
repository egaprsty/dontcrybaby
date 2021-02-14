import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div className="font-serif">
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
            <div className="flex flex-no-wrap mt-8">
              <Image
                className="rounded-full"
                src="/ega.jpg"
                width={50}
                height={50}
              />
              
              <h1 className="ml-3 mt-3 text-gray-400">@EGAPRSTY</h1>
              </div>
              <br/>
              <div>
                <div className="flex justify-center">
                  <Image
                    src="/undraw.png"
                    width={400}
                    height={300}
                  />
                </div>
                  <div className="shadow-xl rounded-lg text-center border-gray-100 bg-gray-50">
                    <br/>
                    <p>A fullstack Software Developer, crafting with Javascript, React, and Golang at the moment. Love with games, and building useful products.</p>
                    <br/>
                  </div>
              </div>
                    
              <h1 className="mt-10 text-center font-bold">INFORMATION</h1>
               <hr/>
                 <br/>
                  <div className="flex justify-center">
                  <Link href="/corona19"> 
                    <button className="bg-purple-300 hover:bg-blue-700 rounded-lg pr-10 pl-10 shadow-lg">
                      COVID 19 IN THE WORLD
                </button>
              </Link>
            </div>
                 <br/>
               
        <div className="flex justify-center">
                <h1 className="font-bold">THE DATA SCHOOL AT MAJENANG</h1>
                </div>
                <br/>
            

             <h1 className="text-center font-bold bg-yellow-400 pr-2 pl-2 rounded-lg shadow-lg">BLOG</h1>
              <br/>
    
            <div className="flex flex-no-wrap">
              <Link href="https://dev.to/ga/react-component-libraries-3oa5">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img className="h-48 w-full object-cover md:w-48" src="/react.png" alt="Man looking at item at a store" />
                </div>
           <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold pt-5">React Comp</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Click in here if u wanna to see this article</a>
                <p className="mt-2 text-gray-500">Javascript Tutorial</p>
          </div>
      </div>
    </div>
</Link>

            <Link href="https://dev.to/ga/realtime-chat-app-golang-5498">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ml-2">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">  
                    <img className="h-48 w-full object-cover md:w-48" src="/golang.png" alt="Man looking at item at a store" />
            </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold pt-5">Chat App Go</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Click in here if u wanna to see this article</a>
                <p className="mt-2 text-gray-500">Golang Tutorial</p>
        </div>
      </div>
    </div>
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
