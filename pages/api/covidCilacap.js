export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 2,
            positif: 13
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 0,
            positif: 14
        },
        {
            name: 'Kec. Majenang',
            kontak: 5,
            dirawat: 4,
            positif: 17
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 3,
            positif: 22
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 1,
            positif: 7
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
            positif: 3
        },
        {
            name: 'Kec. Patimuan',
            kontak: 9,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 2,
            positif: 15
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 20,
            dirawat: 1,
            positif: 20
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 49
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 3,
            dirawat: 1,
            positif: 27
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 6,
            dirawat: 2,
            positif: 41
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 1,
            positif: 8
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 14
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 1,
            positif: 28
        },
        {
            name: 'Kec. Binangun',
            kontak: 4,
            dirawat: 0,
            positif: 10
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
            kontak: 16,
            dirawat: 4,
            positif: 69
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 9,
            dirawat: 2,
            positif: 74
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 13,
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
