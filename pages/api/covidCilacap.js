export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 3,
            dirawat: 3,
            positif: 7
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 2,
            positif: 7
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 1,
            positif: 21
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 0,
            positif: 10
        },
        {
            name: 'Kec. Cipari',
            kontak: 3,
            dirawat: 2,
            positif: 12
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
            dirawat: 1,
            positif: 5
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 0,
            positif: 13
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 3,
            positif: 6
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 19
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 0,
            dirawat: 0,
            positif: 29
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 0,
            dirawat: 1,
            positif: 35
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 10
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 13
        },
        {
            name: 'Kec. Kroya',
            kontak: 11,
            dirawat: 0,
            positif: 50
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 14
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
            positif: 2
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 6,
            dirawat: 0,
            positif: 60
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 0,
            dirawat: 2,
            positif: 62
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 0,
            dirawat: 2,
            positif: 89
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
