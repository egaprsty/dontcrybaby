export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 5,
            positif: 13
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 0,
            positif: 14
        },
        {
            name: 'Kec. Majenang',
            kontak: 1,
            dirawat: 2,
            positif: 17
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 2,
            positif: 19
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 1,
            positif: 5
        },
        {
            name: 'Kec. Sidareja',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Patimuan',
            kontak: 9,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 2,
            positif: 14
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 32,
            dirawat: 1,
            positif: 21
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 43
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 3,
            dirawat: 1,
            positif: 29
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 6,
            dirawat: 0,
            positif: 42
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 1,
            positif: 8
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 18
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 3,
            positif: 24
        },
        {
            name: 'Kec. Binangun',
            kontak: 4,
            dirawat: 0,
            positif: 4
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 7
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 0,
            dirawat: 1,
            positif: 73
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 1,
            dirawat: 0,
            positif: 76
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 0,
            dirawat: 0,
            positif: 69
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
