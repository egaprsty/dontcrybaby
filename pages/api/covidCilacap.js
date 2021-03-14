export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 3,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 0,
            positif: 4
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 3,
            positif: 16
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 11,
            dirawat: 2,
            positif: 1
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 0,
            positif: 4
        },
        {
            name: 'Kec. Cipari',
            kontak: 3,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Sidareja',
            kontak: 5,
            dirawat: 2,
            positif: 5
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 0,
            dirawat: 2,
            positif: 6
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 3,
            dirawat: 4,
            positif: 4
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 2,
            positif: 5
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 4,
            dirawat: 1,
            positif: 29
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 6,
            dirawat: 1,
            positif: 28
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 7
        },
        {
            name: 'Kec. Kroya',
            kontak: 8,
            dirawat: 0,
            positif: 19
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
            positif: 1
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 12,
            dirawat: 4,
            positif: 67
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 14,
            dirawat: 1,
            positif: 90
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 33,
            dirawat: 5,
            positif: 70
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
