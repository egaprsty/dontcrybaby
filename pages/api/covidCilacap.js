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
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Majenang',
            kontak: 2,
            dirawat: 6,
            positif: 12
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 4,
            dirawat: 1,
            positif: 8
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Cipari',
            kontak: 1,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Sidareja',
            kontak: 0,
            dirawat: 1,
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
            positif: 0
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 2,
            positif: 4
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 11,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 12,
            dirawat: 0,
            positif: 41
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 13,
            dirawat: 1,
            positif: 32
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 7
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 0,
            positif: 58
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
            positif: 9
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 0,
            dirawat: 1,
            positif: 75
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 3,
            dirawat: 1,
            positif: 82
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 24,
            dirawat: 2,
            positif: 38
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
