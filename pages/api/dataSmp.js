export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'SMP Negeri 1',
            alamat: 'Jl.Bayangkara',
            status: 'Negeri',
            kelurahan: 'Mulyadadi'
        },
        {
            name: 'SMP Negeri 2',
            alamat: 'Jl.Bayangkara',
            status: 'Negeri',
            kelurahan: 'Mulyadadi'
        },
        {
            name: 'SMP Islam',
            alamat: 'Jl.KSuyono',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMP Diponegoro',
            alamat: 'Jl.Diponegoro',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMP Negeri 4',
            alamat: 'Jl.SNunggal',
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
            alamat: 'Jl.Purwodadi',
            status: 'Negeri',
            kelurahan: 'Mulyadadi'
        },
        {
            name: 'SMP Negeri Satap 7',
            alamat: 'Jl.Jerotengah',
            status: 'Negeri',
            kelurahan: 'Boja'
        },
        {
            name: 'SMP Muhammadiyah',
            alamat: 'Jl.AhmadDahlan',
            status: 'Swasta',
            kelurahan: 'Jenang'
        },
        {
            name: 'SMP Ma`arif NU 1',
            alamat: 'Jl.MDahuri',
            status: 'Swasta',
            kelurahan: 'Salebu'
        },
        {
            name: 'SMP Ma`arif NU 2',
            alamat: 'Jl.MBMuminin',
            status: 'Swasta',
            kelurahan: 'Pahonjean'
        },
        {
            name: 'SMP Almaata',
            alamat: 'Jl.KyaiSuhud',
            status: 'Swasta',
            kelurahan: 'Padangsari'
        },
        {
            name: 'MTSN 1 Cilacap',
            alamat: 'Jl.Pahonjean',
            status: 'Negeri',
            kelurahan: 'Pahonjean'
        },
        {
            name: 'MTSS Al Ihya',
            alamat: 'Jl.AlKhittoh',
            status: 'Swasta',
            kelurahan: 'Mulyadadi'
        },
        {
            name: 'MTSS Darwata',
            alamat: 'Jl.KyaiNawawi',
            status: 'Swasta',
            kelurahan: 'Padangsari'
        },
        {
            name: 'MTSS El Bayan',
            alamat: 'Jl.Pemuda',
            status: 'Swasta',
            kelurahan: 'Padangjaya'
        },
        {
            name: 'MTSS Muhammadiyah',
            alamat: 'Jl.Srikaya',
            status: 'Swasta',
            kelurahan: 'Jenang'
        },
        {
            name: 'MTSS Nurul QUR`AN',
            alamat: 'Jl.KBahrudin',
            status: 'Swasta',
            kelurahan: 'Salebu'
        },
        {
            name: 'MTSS Pesantren Pembangunan',
            alamat: 'Jl.KHSTsauri',
            status: 'Swasta',
            kelurahan: 'Cibeunying'
        },
        {
            name: 'MTSS SA Tanwirul Huda',
            alamat: 'Jl.KyaiSuhud',
            status: 'Swasta',
            kelurahan: 'Padangsari'
        },
    ]))
}
