export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 1,
            positif: 7
        },
        {
            name: 'Kec. Wanareja',
            kontak: 4,
            dirawat: 1,
            positif: 4
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 3,
            positif: 28
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 2,
            positif: 15
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 3,
            positif: 4
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
            dirawat: 1,
            positif: 6
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 7
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 3,
            positif: 8
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 1,
            positif: 11
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 1,
            positif: 13
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 1,
            dirawat: 5,
            positif: 23
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 5,
            dirawat: 2,
            positif: 58
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 8
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Kroya',
            kontak: 5,
            dirawat: 2,
            positif: 37
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 12
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 6
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
            dirawat: 7,
            positif: 69
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 0,
            dirawat: 7,
            positif: 82
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 0,
            dirawat: 3,
            positif: 62
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
