import "./app.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

const users =  [
{
    userName:'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
},
{
    userName:'pheralb',
    name: 'Pablo H.',
    isFollowing: false
},
{
    userName:'Pacohdezs',
    name: 'Paco Hdez',
    isFollowing: true
},
{
    userName:'TMChein',
    name: 'Tomas',
    isFollowing: false
},
]

export function App () {
    
    return (
      <section className="App">
      {
        users.map(user => {
            return (
                <TwitterFollowCard
                    key={user.userName}
                    userName={user.userName}
                    initialIsFollowing={user.isFollowing}
                >
                {user.name}
                </TwitterFollowCard>
            )
        })
      }
      </section>
    );
}

//*************************estilos en línea con React/ 
//style={{display:'flex', color:'#fff', alignItems:'center'}}