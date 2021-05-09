export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 1,
            positif: 15
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 0,
            positif: 8
        },
        {
            name: 'Kec. Majenang',
            kontak: 1,
            dirawat: 0,
            positif: 27
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 0,
            positif: 29
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 0,
            positif: 12
        },
        {
            name: 'Kec. Sidareja',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 0,
            dirawat: 1,
            positif: 5
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
            positif: 12
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 3,
            positif: 23
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
            dirawat: 1,
            positif: 38
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 0,
            dirawat: 4,
            positif: 38
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
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
            kontak: 8,
            dirawat: 1,
            positif: 40
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
            kontak: 0,
            dirawat: 0,
            positif: 75
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 2,
            dirawat: 1,
            positif: 88
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 0,
            dirawat: 1,
            positif: 78
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
