export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 1,
            positif: 19
        },
        {
            name: 'Kec. Wanareja',
            kontak: 11,
            dirawat: 5,
            positif: 7
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 6,
            positif: 16
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 1,
            dirawat: 1,
            positif: 1
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 8,
            dirawat: 0,
            positif: 30
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 3,
            positif: 9
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
            dirawat: 0,
            positif: 0
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 0,
            positif: 16
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 33,
            dirawat: 3,
            positif: 40
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 3,
            positif: 52
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 36,
            dirawat: 0,
            positif: 33
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 9,
            dirawat: 4,
            positif: 38
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
            dirawat: 0,
            positif: 19
        },
        {
            name: 'Kec. Kroya',
            kontak: 21,
            dirawat: 3,
            positif: 11
        },
        {
            name: 'Kec. Binangun',
            kontak: 2,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 7
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 22,
            dirawat: 3,
            positif: 63
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 5,
            dirawat: 0,
            positif: 76
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 20,
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
