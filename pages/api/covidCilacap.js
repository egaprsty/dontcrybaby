export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 3,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 3,
            positif: 16
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 11,
            dirawat: 3,
            positif: 5
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 0,
            positif: 4
        },
        {
            name: 'Kec. Cipari',
            kontak: 3,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Sidareja',
            kontak: 5,
            dirawat: 3,
            positif: 4
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 0,
            dirawat: 2,
            positif: 5
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 3,
            dirawat: 4,
            positif: 4
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
            positif: 1
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 4,
            dirawat: 1,
            positif: 42
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 6,
            dirawat: 1,
            positif: 30
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 8
        },
        {
            name: 'Kec. Kroya',
            kontak: 8,
            dirawat: 0,
            positif: 21
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 12,
            dirawat: 4,
            positif: 67
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 14,
            dirawat: 1,
            positif: 82
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 33,
            dirawat: 6,
            positif: 65
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
