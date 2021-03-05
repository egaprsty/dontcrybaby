export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Wanareja',
            kontak: 4,
            dirawat: 1,
            positif: 5
        },
        {
            name: 'Kec. Majenang',
            kontak: 1,
            dirawat: 4,
            positif: 21
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 1,
            dirawat: 1,
            positif: 5
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 2,
            dirawat: 1,
            positif: 13
        },
        {
            name: 'Kec. Cipari',
            kontak: 3,
            dirawat: 1,
            positif: 6
        },
        {
            name: 'Kec. Sidareja',
            kontak: 0,
            dirawat: 1,
            positif: 1
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 5,
            dirawat: 3,
            positif: 5
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 5,
            dirawat: 1,
            positif: 3
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 0,
            dirawat: 0,
            positif: 54
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 6,
            dirawat: 0,
            positif: 30
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 8
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 0,
            positif: 61
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
            positif: 8
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 14,
            dirawat: 0,
            positif: 74
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 6,
            dirawat: 0,
            positif: 65
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 8,
            dirawat: 1,
            positif: 39
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
