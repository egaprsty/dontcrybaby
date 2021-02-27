export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 1,
            dirawat: 0,
            positif: 16
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 1,
            positif: 3
        },
        {
            name: 'Kec. Majenang',
            kontak: 5,
            dirawat: 2,
            positif: 17
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 6,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 3,
            dirawat: 1,
            positif: 8
        },
        {
            name: 'Kec. Cipari',
            kontak: 2,
            dirawat: 2,
            positif: 8
        },
        {
            name: 'Kec. Sidareja',
            kontak: 1,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 1,
            dirawat: 0,
            positif: 11
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 0,
            positif: 4
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 1,
            positif: 4
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 5,
            dirawat: 1,
            positif: 43
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 2,
            dirawat: 1,
            positif: 36
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
            positif: 13
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 0,
            positif: 27
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 5
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
            dirawat: 1,
            positif: 63
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 10,
            dirawat: 1,
            positif: 40
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 3,
            dirawat: 2,
            positif: 51
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        }
    ]))
}
