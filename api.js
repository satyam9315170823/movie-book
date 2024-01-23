export const database = [
    { name: 'Bahubali', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg' },
    { name: 'Pushpa', imgUrl: 'https://photosfile.com/wp-content/uploads/2022/08/Pushpa-Photos-1.jpeg' },
    { name: 'KGF', imgUrl: 'https://static.toiimg.com/thumb/msid-91576319,width-1280,resizemode-4/91576319.jpg' },
    { name: 'RRR', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg' },
    { name: 'Brahmastra', imgUrl: 'https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5041/1405041-v-3f9a1366bf49' }
]
export const availibility = {
    'Bahubali': [1, 2, 5, 8, 9,19,22,20,11],
    'Pushpa': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'KGF': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'RRR': [4, 6, 8,10,11,12,13,14,15,16],
    'Brahmastra': [3, 5, 7, 9,20,21,12,13,19,24]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }