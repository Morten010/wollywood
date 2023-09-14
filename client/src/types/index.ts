
export type genreProps = {
    id: number
    title: string
    poster_genre_rel: PosterGenreRel
}

export type PosterGenreRel = {
    genre_id: number
    poster_id: number
}

export type MovieProps = {
    id: number
    name: string
    image: string
    price: number
    slug: string
    genre: genreProps[]
}

export type MovieDetails = MovieProps & {
    description: string
    height: number
    stock: number
    updatedAt: string
    width: number
}

export type CartMovieProps = {
    id: 1,
    user_id: 1,
    poster_id: 1452,
    quantity: 1,
    createdAt: '2023-09-14T10:36:50.000Z',
    updatedAt: '2023-09-14T10:36:50.000Z',
    posterId: 1452,
    poster: {
    id: 1452,
    name: 'Star Wars: The Rise of Skywalker',
    image: 'https://info.kinorevuen.dk/wp-content/uploads/2021/01/rise-of-skywalker-plakat-1.jpg',
    price: 70
    }
}