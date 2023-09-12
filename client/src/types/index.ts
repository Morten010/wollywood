
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