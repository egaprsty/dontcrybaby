export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'SD Negeri Jenang 01',
            alamat: 'Jl. Dr Sutomo',
            status: 'Negeri',
            kelurahan: 'Jenang'
        },
        {
            name: 'SD Negeri Jenang 02',
            alamat: 'Jl. Pahlawan',
            status: 'Negeri',
            kelurahan: 'Jenang'
        },
        {
            name: 'SD Negeri Jenang 06',
            alamat: 'Jl. Pisang 35',
            status: 'Negeri',
            kelurahan: 'Jenang'
        },
        {
            name: 'SD Sindangsari 02',
            alamat: 'Jl. Mawar',
            status: 'Negeri',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SD Negeri Jenang 05',
            alamat: 'Jl. Manggis',
            status: 'Negeri',
            kelurahan: 'Mulyasari'
        },
        {
            name: 'SD Negeri Mulyadadi 02',
            alamat: 'Jl. Al Khitoh',
            status: 'Negeri',
            kelurahan: 'Mulyadadi'
        },
        {
            name: 'SD Negeri Jenang 04',
            alamat: 'Jl.Pramuka',
            status: 'Negeri',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SD Negeri Salebu 03',
            alamat: 'Jl. Gunung Padang',
            status: 'Negeri',
            kelurahan: 'Salebu'
        },
        {
            name: 'SD Negeri Mulyasari 03',
            alamat: 'Jl. Teratai',
            status: 'Negeri',
            kelurahan: 'Mulyasari'
        },
        {
            name: 'SD Mulyasari 04',
            alamat: 'Jl. Nusa Indah',
            status: 'Negeri',
            kelurahan: 'Mulyasari'
        },
        {
            name: 'SD Negeri Jenang 07',
            alamat: 'Jl. Dr Soetomo',
            status: 'Negeri',
            kelurahan: 'Jenang'
        },
        {
            name: 'SD Negeri Bener 01',
            alamat: 'Jl. Raya Bener',
            status: 'Negeri',
            kelurahan: 'Bener'
        },
        {
            name: 'SD Negeri Padangsari 01',
            alamat: 'Jl. Kyai Suhud',
            status: 'Negeri',
            kelurahan: 'Padangsari'
        },
        {
            name: 'SD Negeri Padangsari 02',
            alamat: 'Jl. Banteng Loreng',
            status: 'Negeri',
            kelurahan: 'Boja'
        },
        {
            name: 'SD Negeri Cibeunying 01',
            alamat: 'Jl. Kh Sufyan Tsauri',
            status: 'Negeri',
            kelurahan: 'Cibeunying'
        },
        {
            name: 'SD Muhammadiyah',
            alamat: 'Jl. H. Abd Patah',
            status: 'Negeri',
            kelurahan: 'Pahonjean'
        },
    ]))
}
