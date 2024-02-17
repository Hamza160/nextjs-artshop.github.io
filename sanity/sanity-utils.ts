import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-02-16',
    useCdn: true,
    title: "artshop",
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN
});

export const getUsersByEmail = async (email: string) => {
    return client.fetch(
        groq`*[_type == "user" && email == $email]{
            _id,
            name,
            email,
            createdAt
        }`,
        {email}
    )
}

export const createUser = async (userDetails: {name:string, email:string}) => {
    const {name, email} = userDetails;

    const newUser = await client.create({
        _type:'user',
        name,
        email,
        createdAt: new Date().toISOString()
    });

    return newUser;
}