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
            positif: 7
        },
        {
            name: 'Kec. Majenang',
            kontak: 2,
            dirawat: 5,
            positif: 16
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 2,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 0,
            positif: 14
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 0,
            positif: 7
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
            positif: 9
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
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 1,
            positif: 5
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 33,
            dirawat: 0,
            positif: 53
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 4,
            dirawat: 0,
            positif: 31
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
            positif: 7
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 0,
            positif: 60
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
            kontak: 9,
            dirawat: 0,
            positif: 72
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 2,
            dirawat: 0,
            positif: 80
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 0,
            dirawat: 1,
            positif: 45
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
