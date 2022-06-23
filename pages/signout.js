import {useEffect} from 'react'
import { useRouter } from 'next/router'


export default function signout(){
    const router = useRouter()
    useEffect(() => {
        window.sessionStorage.removeItem('user')
        router.push('/signin')
    })




    return (<p>Good Bye !</p> )
}