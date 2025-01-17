import { HistoryCard } from '../../components/HistoryCard'
import { PostCard } from '../../components/PostCard'
import { HistoryList } from '../../templates/HistoryList'

export function Home () {
  const quantity = Array(20).fill('Username')
  return (
    <>
      <HistoryList>
        {
          quantity.map((user, index) => (
            <HistoryCard key={index} username={user} img='https://randomuser.me/api/portraits/med/men/47.jpg' />
          ))
        }

      </HistoryList>
      <section style={{width: '480px', display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <PostCard />
        <PostCard />
      </section>
    </>
  )
}
