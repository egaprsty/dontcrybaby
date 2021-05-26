export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 1,
            dirawat: 2,
            positif: 6
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 5,
            positif: 3
        },
        {
            name: 'Kec. Majenang',
            kontak: 3,
            dirawat: 8,
            positif: 19
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 1,
            positif: 10
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 0,
            positif: 11
        },
        {
            name: 'Kec. Cipari',
            kontak: 2,
            dirawat: 1,
            positif: 5
        },
        {
            name: 'Kec. Sidareja',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 0,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 1,
            positif: 14
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 2,
            positif: 6
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 44
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 8,
            dirawat: 0,
            positif: 55
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 26,
            dirawat: 0,
            positif: 34
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 1,
            positif: 24
        },
        {
            name: 'Kec. Maos',
            kontak: 3,
            dirawat: 0,
            positif: 10
        },
        {
            name: 'Kec. Kroya',
            kontak: 19,
            dirawat: 3,
            positif: 22
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 32
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
            positif: 12
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 13,
            dirawat: 3,
            positif: 35
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 5,
            dirawat: 0,
            positif: 48
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 62,
            dirawat: 7,
            positif: 92
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
