import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev">
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard userName="yealuis" initialIsFolowing={true}>
                Luis Javier Perez
            </TwitterFollowCard>
            <TwitterFollowCard userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>
        </section>
    )
}