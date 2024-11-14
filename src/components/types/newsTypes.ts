export type newsType = {
    title: string,
    date: Date,
    description?: string,
    image: string
}

export const newsMock: newsType[] = [
    {
        title: "SC se mantém como o maior produtor de ostras, vieiras e mexilhões no país",
        date: new Date("10/07/2024"),
        image: "/image01.png"
    },
    {
        title: "Laboratório de Maricultura da Univali estuda nova espécie invasora de mexilhão na região",
        date: new Date("09/17/2024"),
        image: "/image02.png"
    }
]