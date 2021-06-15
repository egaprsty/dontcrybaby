export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 12,
            dirawat: 3,
            positif: 44
        },
        {
            name: 'Kec. Wanareja',
            kontak: 9,
            dirawat: 6,
            positif: 44
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 15,
            positif: 42
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 3,
            positif: 79
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 24,
            dirawat: 1,
            positif: 37
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 0,
            positif: 13
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
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 5,
            positif: 0
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 3,
            positif: 35
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 6,
            dirawat: 2,
            positif: 21
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 2,
            positif: 23
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 0,
            dirawat: 0,
            positif: 46
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 17,
            dirawat: 3,
            positif: 49
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 5,
            positif: 24
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 1,
            positif: 56
        },
        {
            name: 'Kec. Kroya',
            kontak: 9,
            dirawat: 7,
            positif: 48
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 33
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 59
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 7
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 0,
            dirawat: 2,
            positif: 57
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 0,
            dirawat: 3,
            positif: 79
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 24,
            dirawat: 6,
            positif: 116
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 8
        },
    ]))
}
