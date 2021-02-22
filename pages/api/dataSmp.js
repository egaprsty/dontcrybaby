export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'SMP Negeri 1',
            alamat: 'Bayangkara',
            status: 'Negeri',
            kelurahan: 'Mulyadadi'
        },
        {
            name: 'SMP Negeri 2',
            alamat: 'Bayangkara',
            status: 'Negeri',
            kelurahan: 'Mulyadadi'
        },
        {
            name: 'SMP Islam',
            alamat: 'Suyono',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMP Diponegoro',
            alamat: 'Diponegoro',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMP Negeri 4',
            alamat: 'Sepatnunggal',
            status: 'Negeri',
            kelurahan: 'Sepatnunggal'
        },
        {
            name: 'SMP Negeri 3',
            alamat: 'Jl. Benda',
            status: 'Negeri',
            kelurahan: 'Padangjaya'
        },
        {
            name: 'SMP Negeri Satap 5',
            alamat: 'Jl.KiBangun',
            status: 'Negeri',
            kelurahan: 'Salebu'
        },
        {
            name: 'SMP Negeri Satap 6',
            alamat: 'Purwodadi',
            status: 'Negeri',
            kelurahan: 'Mulyadadi'
        },
        {
            name: 'SMP Negeri Satap 7',
            alamat: 'Jerotengah',
            status: 'Negeri',
            kelurahan: 'Boja'
        },
        {
            name: 'SMP Muhammadiyah',
            alamat: 'AhmadDahlan',
            status: 'Swasta',
            kelurahan: 'Jenang'
        },
        {
            name: 'SMP Ma`arif NU 1',
            alamat: 'Jl. M Dahuri',
            status: 'Swasta',
            kelurahan: 'Salebu'
        },
        {
            name: 'SMP Ma`arif NU 2',
            alamat: 'Jl. Masjid Baitul Muminin',
            status: 'Swasta',
            kelurahan: 'Pahonjean'
        },
        {
            name: 'SMP Almaata',
            alamat: 'Jl. Kyai Suhud 14',
            status: 'Swasta',
            kelurahan: 'Padangsari'
        },
        {
            name: 'MTSN 1 Cilacap',
            alamat: 'Jl. Pahonjean 11',
            status: 'Negeri',
            kelurahan: 'Pahonjean'
        },
        {
            name: 'MTSS Al Ihya',
            alamat: 'Jl. Al Khittoh 59',
            status: 'Swasta',
            kelurahan: 'Mulyadadi'
        },
        {
            name: 'MTSS Darwata',
            alamat: 'Jl. Kyai Nawawi 04',
            status: 'Swasta',
            kelurahan: 'Padangsari'
        },
        {
            name: 'MTSS El Bayan',
            alamat: 'Jl. Pemuda 10',
            status: 'Swasta',
            kelurahan: 'Padangjaya'
        },
        {
            name: 'MTSS Muhammadiyah',
            alamat: 'Jl. Srikaya',
            status: 'Swasta',
            kelurahan: 'Jenang'
        },
        {
            name: 'MTSS Nurul QUR`AN',
            alamat: 'Jl. KH Bahrudin',
            status: 'Swasta',
            kelurahan: 'Salebu'
        },
        {
            name: 'MTSS Pesantren Pembangunan',
            alamat: 'Jl. KH Sufyan Tsauri',
            status: 'Swasta',
            kelurahan: 'Cibeunying'
        },
        {
            name: 'MTSS SA Tanwirul Huda',
            alamat: 'Jl. Kyai Suhud 14',
            status: 'Swasta',
            kelurahan: 'Padangsari'
        },
    ]))
}
