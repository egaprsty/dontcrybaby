export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 12,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 4,
            positif: 1
        },
        {
            name: 'Kec. Majenang',
            kontak: 3,
            dirawat: 1,
            positif: 11
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 2,
            dirawat: 2,
            positif: 8
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 3,
            dirawat: 1,
            positif: 2
        },
        {
            name: 'Kec. Cipari',
            kontak: 7,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Sidareja',
            kontak: 0,
            dirawat: 0,
            positif: 9
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 0,
            dirawat: 2,
            positif: 3
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 7
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 1,
            dirawat: 2,
            positif: 8
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 2,
            dirawat: 1,
            positif: 2
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 1,
            positif: 3
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 24,
            dirawat: 2,
            positif: 18
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 9,
            dirawat: 0,
            positif: 16
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
        {
            name: 'Kec. Maos',
            kontak: 8,
            dirawat: 0,
            positif: 4
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 0,
            positif: 20
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
            positif: 4
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 25,
            dirawat: 3,
            positif: 57
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 11,
            dirawat: 2,
            positif: 69
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 26,
            dirawat: 2,
            positif: 79
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
