export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'SMK Komputama',
            alamat: 'Jl.YosSudarso',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMA Negeri 1',
            alamat: 'Jl.Pahonjean',
            status: 'Negeri',
            kelurahan: 'Pahonjean'
        },
        {
            name: 'SMK Diponegoro',
            alamat: 'Jl.Pahonjean',
            status: 'Swasta',
            kelurahan: 'Pahonjean'
        },
        {
            name: 'SMK Yos Sudarso',
            alamat: 'Jl.YosSudarso',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMA Yos Sudarso',
            alamat: 'Jl.YosSudarso',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMK Farmasi',
            alamat: 'Jl.DrWahidin',
            status: 'Negeri',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMK Muhammadiyah',
            alamat: 'Jl.Padangjaya',
            status: 'Swasta',
            kelurahan: 'Cilopadang'
        },
        {
            name: 'MA Elbayan',
            alamat: 'Jl. Benda',
            status: 'Swasta',
            kelurahan: 'Padangjaya'
        },
        {
            name: 'SMA Purnama',
            alamat: 'Jl.Bhayangkara',
            status: 'Swasta',
            kelurahan: 'Sindangsari'
        },
        {
            name: 'SMK AlMaata',
            alamat: 'Jl.KyaiSuhud',
            status: 'Swasta',
            kelurahan: 'Padangsari'
        },
        {
            name: 'MA Nurul Quran',
            alamat: 'Jl.KBaharudin',
            status: 'Swasta',
            kelurahan: 'Salebu'
        },
        {
            name: 'MAN 2 Cilacap',
            alamat: 'Jl.KH.Tsauri',
            status: 'Negeri',
            kelurahan: 'Salebu'
        },
    ]))
}
