export type UserType = {
    id?: number
    firstName: string
    lastName: string
    avatar: string
    location: {
        country: string
        city: string
    }
    skills: string[]
    role: string
}

export const UsersData: UserType[] = [
    {
        id: 1,
        firstName: 'Walter',
        lastName: 'White',
        avatar: 'https://w7.pngwing.com/pngs/226/286/png-transparent-walter-white-jesse-pinkman-sticker-decal-breaking-bad-season-5-walter-white-television-hat-fictional-characters-thumbnail.png',
        location: {
            country: 'USA',
            city: 'Albuquerque'
        },
        skills: ['Meth', 'Methamphetamine', 'Chemistry', 'Style', 'Power'],
        role: 'Heisenberg'
    }
]