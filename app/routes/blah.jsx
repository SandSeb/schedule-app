import { useLoaderData } from "@remix-run/react"

export function clientLoader() {
    return { header: 'Welcome to the Bla'}
}

export default function Bla() {
    const loader = useLoaderData();

    return (<div><h1>{loader.header}</h1></div>)
}