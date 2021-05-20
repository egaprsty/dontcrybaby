export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 4,
            dirawat: 2,
            positif: 5
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 2,
            positif: 2
        },
        {
            name: 'Kec. Majenang',
            kontak: 7,
            dirawat: 8,
            positif: 9
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 1,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 1,
            dirawat: 1,
            positif: 10
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 0,
            positif: 4
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
            dirawat: 1,
            positif: 5
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
            dirawat: 1,
            positif: 15
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 0,
            dirawat: 4,
            positif: 6
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 40
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 0,
            dirawat: 1,
            positif: 27
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 5,
            dirawat: 1,
            positif: 27
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 0,
            positif: 19
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 13
        },
        {
            name: 'Kec. Kroya',
            kontak: 9,
            dirawat: 0,
            positif: 42
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 25
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
            positif: 3
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 2,
            dirawat: 4,
            positif: 34
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 6,
            dirawat: 1,
            positif: 51
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 7,
            dirawat: 12,
            positif: 80
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
