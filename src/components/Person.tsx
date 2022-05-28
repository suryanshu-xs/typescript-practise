import React, { useState } from 'react'

export enum HairColor {
    White = 'Your hair is white',
    Brown = 'Brown hair!',
    Black = 'You are the best'
} 

type NameType = "Suryanshu" | "Priyali"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const nameForType: NameType = "Suryanshu"

interface Props {
    name?: string,
    age?: number,
    email?: string;
    hairColor: HairColor // one of the options that HairColor has
}

export const Person: React.FC<Props> = ({ name, email, age,hairColor }) => {

    const [country, setCountry] = useState<string | null>("")
    


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Email: {email}</h3>

            <input type="text" placeholder='Write down your country...' onChange={handleChange} />

            {country}
            {hairColor}
        </div>
    );
}
