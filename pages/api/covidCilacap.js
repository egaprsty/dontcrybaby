export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 0,
            positif: 17
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 1,
            positif: 2
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 5,
            positif: 16
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 2,
            positif: 8
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 1,
            positif: 9
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 3,
            positif: 11
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
            positif: 6
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
            dirawat: 1,
            positif: 1
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 0,
            dirawat: 1,
            positif: 46
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 0,
            dirawat: 1,
            positif: 39
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
            positif: 11
        },
        {
            name: 'Kec. Kroya',
            kontak: 31,
            dirawat: 0,
            positif: 27
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 4
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
            kontak: 0,
            dirawat: 0,
            positif: 67
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 0,
            dirawat: 1,
            positif: 49
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 0,
            dirawat: 0,
            positif: 54
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
