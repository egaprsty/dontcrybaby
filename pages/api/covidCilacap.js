export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 1,
            dirawat: 1,
            positif: 5
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Majenang',
            kontak: 5,
            dirawat: 4,
            positif: 8
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 1,
            dirawat: 1,
            positif: 3
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 1,
            dirawat: 0,
            positif: 8
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 0,
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
            dirawat: 3,
            positif: 6
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 1
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
            dirawat: 4,
            positif: 6
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 1,
            positif: 12
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 0,
            dirawat: 2,
            positif: 21
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 0,
            dirawat: 4,
            positif: 25
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 2,
            positif: 9
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 1,
            positif: 16
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 2,
            positif: 37
        },
        {
            name: 'Kec. Binangun',
            kontak: 19,
            dirawat: 11,
            positif: 19
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 8
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 0,
            dirawat: 1,
            positif: 42
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 0,
            dirawat: 2,
            positif: 54
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 32,
            dirawat: 7,
            positif: 71
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
