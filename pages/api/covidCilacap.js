export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 0,
            dirawat: 0,
            positif: 5
        },
        {
            name: 'Kec. Wanareja',
            kontak: 0,
            dirawat: 1,
            positif: 10
        },
        {
            name: 'Kec. Majenang',
            kontak: 0,
            dirawat: 2,
            positif: 24
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
            dirawat: 4,
            positif: 13
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 1,
            positif: 8
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
            positif: 2
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
            dirawat: 3,
            positif: 9
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 9,
            dirawat: 2,
            positif: 11
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 2,
            positif: 33
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 2,
            dirawat: 8,
            positif: 18
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 0,
            dirawat: 1,
            positif: 51
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
            dirawat: 0,
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
            positif: 1
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 8,
            dirawat: 4,
            positif: 59
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 12,
            dirawat: 3,
            positif: 69
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 0,
            dirawat: 2,
            positif: 60
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
