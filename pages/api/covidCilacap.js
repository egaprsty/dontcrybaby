export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 1,
            positif: 19
        },
        {
            name: 'Kec. Wanareja',
            kontak: 4,
            dirawat: 5,
            positif: 7
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 15,
            positif: 14
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 1,
            dirawat: 1,
            positif: 1
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 8,
            dirawat: 0,
            positif: 30
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 2,
            positif: 9
        },
        {
            name: 'Kec. Sidareja',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 1,
            positif: 14
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 17,
            dirawat: 3,
            positif: 41
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 2,
            positif: 53
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 36,
            dirawat: 0,
            positif: 34
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 0,
            dirawat: 4,
            positif: 37
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 2,
            positif: 11
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 20
        },
        {
            name: 'Kec. Kroya',
            kontak: 21,
            dirawat: 3,
            positif: 23
        },
        {
            name: 'Kec. Binangun',
            kontak: 2,
            dirawat: 0,
            positif: 5
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
            kontak: 27,
            dirawat: 2,
            positif: 63
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 9,
            dirawat: 0,
            positif: 77
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 20,
            dirawat: 2,
            positif: 64
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
