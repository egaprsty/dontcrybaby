export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 60,
            dirawat: 3,
            positif: 24
        },
        {
            name: 'Kec. Wanareja',
            kontak: 11,
            dirawat: 6,
            positif: 79
        },
        {
            name: 'Kec. Majenang',
            kontak: 55,
            dirawat: 15,
            positif: 120
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 4,
            dirawat: 3,
            positif: 209
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 12,
            dirawat: 1,
            positif: 92
        },
        {
            name: 'Kec. Cipari',
            kontak: 3,
            dirawat: 0,
            positif: 15
        },
        {
            name: 'Kec. Sidareja',
            kontak: 1,
            dirawat: 0,
            positif: 64
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 1,
            dirawat: 0,
            positif: 60
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 5,
            positif: 20
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 1,
            dirawat: 3,
            positif: 79
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 2,
            positif: 52
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 2,
            positif: 92
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 3,
            dirawat: 0,
            positif: 160
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 0,
            dirawat: 3,
            positif: 182
        },
        {
            name: 'Kec. Adipala',
            kontak: 20,
            dirawat: 5,
            positif: 86
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 1,
            positif: 117
        },
        {
            name: 'Kec. Kroya',
            kontak: 31,
            dirawat: 7,
            positif: 104
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 105
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 112
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 1,
            dirawat: 0,
            positif: 63
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 9,
            dirawat: 2,
            positif: 111
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 13,
            dirawat: 3,
            positif: 181
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 5,
            dirawat: 6,
            positif: 243
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 13
        },
    ]))
}
