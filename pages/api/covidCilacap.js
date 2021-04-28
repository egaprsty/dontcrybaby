export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 10,
            dirawat: 5,
            positif: 5
        },
        {
            name: 'Kec. Wanareja',
            kontak: 6,
            dirawat: 1,
            positif: 10
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 3,
            positif: 19
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 8,
            dirawat: 3,
            positif: 15
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
            positif: 4
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 0,
            dirawat: 1,
            positif: 3
        },
        {
            name: 'Kec. Patimuan',
            kontak: 9,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 3,
            positif: 13
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 1,
            positif: 19
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 35
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 0,
            dirawat: 1,
            positif: 26
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 0,
            dirawat: 2,
            positif: 53
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
            positif: 3
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 2,
            positif: 28
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 9
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
            kontak: 0,
            dirawat: 2,
            positif: 60
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 2,
            dirawat: 4,
            positif: 79
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 25,
            dirawat: 2,
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
