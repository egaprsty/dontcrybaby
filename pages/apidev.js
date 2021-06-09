import React from 'react';

function Api() { 

return ( 
<div className="space y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
        <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
            <div className="flex justify-center mt-10">
                
                <div>
                    <h1 className="font-bold text-lg">API COVID KABUPATEN CILACAP</h1>
                <hr />
                <div className="mr-3">
                    <h1 className="mt-2">Usage Endpoint:</h1>
                </div>

                <div className="bg-gray-200 rounded-lg pr-2 pl-2 shadow-lg mt-2">
                    https://egaprsty.vercel.app/api/covidCilacap
                </div>

                <br/>
                <br/>

                <h1 className="font-bold text-lg">API DATA SEKOLAH SD MAJENANG</h1>
                    <hr />
                <div className="mr-3">
                    <h1 className="mt-2">Usage Endpoint:</h1>
                </div>

                <div className="bg-gray-200 rounded-lg pr-2 pl-2 shadow-lg mt-2">
                    https://egaprsty.vercel.app/api/dataSd
                </div>

                <br/>
                <br/>

                <h1 className="font-bold text-lg">API DATA SEKOLAH SMP MAJENANG</h1>
                <hr />
                <div className="mr-3">
                    <h1 className="mt-2">Usage Endpoint:</h1>
                </div>

                <div className="bg-gray-200 rounded-lg pr-2 pl-2 shadow-lg mt-2">
                    https://egaprsty.vercel.app/api/dataSmp
                </div>

                <br/>
                <br/>

                <h1 className="font-bold text-lg">API DATA SEKOLAH SMK/A MAJENANG</h1>
                <hr />
                <div className="mr-3">
                    <h1 className="mt-2">Usage Endpoint:</h1>
                </div>

                <div className="bg-gray-200 rounded-lg pr-2 pl-2 shadow-lg mt-2">
                    https://egaprsty.vercel.app/api/dataSmk
                </div>

                <br/>
                <br/>
                        
                <h1 className="text-center font-gray-100">Made With Love @egaprsty</h1>

                    </div>
                </div>
                </div>
                </header>
            </div>
    )
}

export default Api;
