export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 6,
            dirawat: 0,
            positif: 0
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 1,
            positif: 1
        },
        {
            name: 'Kec. Majenang',
            kontak: 1,
            dirawat: 3,
            positif: 9
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 13,
            dirawat: 3,
            positif: 1
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 1,
            positif: 1
        },
        {
            name: 'Kec. Cipari',
            kontak: 5,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Sidareja',
            kontak: 6,
            dirawat: 3,
            positif: 3
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
            positif: 1
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 5,
            positif: 4
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 2,
            dirawat: 1,
            positif: 5
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
            dirawat: 1,
            positif: 15
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 15,
            dirawat: 0,
            positif: 22
        {,
        }
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
        {
            name: 'Kec. Maos',
            kontak: 7,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Kroya',
            kontak: 1,
            dirawat: 0,
            positif: 24
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
            kontak: 9,
            dirawat: 2,
            positif: 64
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 16,
            dirawat: 3,
            positif: 74
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 45,
            dirawat: 3,
            positif: 74
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
