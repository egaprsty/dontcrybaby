export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'SMK Komputama',
            alamat: 'Jl. Yos Sudarso',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMA Negeri 1',
            alamat: 'Jl.Rya Pahonjean',
            status: 'Negri',
            kelurahan: 'Pahonjean'
        },
        {
            name: 'SMK Diponegoro',
            alamat: 'Jl.Rya Pahonjean',
            status: 'Swasta',
            kelurahan: 'Pahonjean'
        },
        {
            name: 'SMK Yos Sudarso',
            alamat: 'Jl. Yos Sudarso',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMA Yos Sudarso',
            alamat: 'Jl. Yos Sudarso',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMK Farmasi',
            alamat: 'Jl. Dr Wahidin 288',
            status: 'Negri',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMK Muhammadiyah',
            alamat: 'Jl. Padangjaya',
            status: 'Swasta',
            kelurahan: 'Cilopadang'
        },
        {
            name: 'MA Elbayan',
            alamat: 'Jl. Benda KM02',
            status: 'Swasta',
            kelurahan: 'Padangjaya'
        },
        {
            name: 'SMA Purnama',
            alamat: 'Jl. Bhayangkara',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMK AlMaata',
            alamat: 'Jl. Kyai Suhud',
            status: 'Swasta',
            kelurahan: 'Padangsari'
        },
        {
            name: 'MA Nurul Quran',
            alamat: 'Jl. KH. Baharudin',
            status: 'Swasta',
            kelurahan: 'Salebu'
        },
        {
            name: 'MAN 2 Cilacap',
            alamat: 'Jl. KH. Tsauri',
            status: 'Negri',
            kelurahan: 'Salebu'
        },
    ]))
}
