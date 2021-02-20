export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 1,
            positif: 9
        },
        {
            name: 'Kec. Majenang',
            kontak: 1,
            dirawat: 5,
            positif: 9
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 5,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 0,
            positif: 8
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 1,
            positif: 8
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
            positif: 11
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 1,
            positif: 16
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 0,
            positif: 12
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 0,
            positif: 4
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 3,
            dirawat: 2,
            positif: 24
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 0,
            dirawat: 0,
            positif: 46
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 1,
            positif: 20
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 0,
            positif: 14
        },
        {
            name: 'Kec. Binangun',
            kontak: 3,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 3
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
            positif: 53
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 12,
            dirawat: 4,
            positif: 42
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 0,
            dirawat: 5,
            positif: 76
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 1
        }
    ]))
}
