export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 6,
            dirawat: 4,
            positif: 16
        },
        {
            name: 'Kec. Wanareja',
            kontak: 12,
            dirawat: 2,
            positif: 4
        },
        {
            name: 'Kec. Majenang',
            kontak: 14,
            dirawat: 11,
            positif: 17
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 4,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 20,
            dirawat: 2,
            positif: 23
        },
        {
            name: 'Kec. Cipari',
            kontak: 1,
            dirawat: 1,
            positif: 7
        },
        {
            name: 'Kec. Sidareja',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 2,
            dirawat: 2,
            positif: 0
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
            dirawat: 2,
            positif: 12
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 2,
            positif: 37
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 5,
            positif: 36
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 13,
            dirawat: 0,
            positif: 37
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 9,
            dirawat: 4,
            positif: 32
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 1,
            positif: 10
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 19
        },
        {
            name: 'Kec. Kroya',
            kontak: 25,
            dirawat: 5,
            positif: 27
        },
        {
            name: 'Kec. Binangun',
            kontak: 2,
            dirawat: 1,
            positif: 6
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 7
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 3,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 5,
            dirawat: 1,
            positif: 75
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 10,
            dirawat: 1,
            positif: 74
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 21,
            dirawat: 4,
            positif: 58
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
