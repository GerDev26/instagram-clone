import { HistoryButton } from '../../../core/components/HistoryButton'
import { HistoryList } from '../../templates/HistoryList'
import { PostList } from '../../templates/PostList'
import { useUsers } from '../../../core/hooks/useUsers'

export function Home () {
  const { data, isLoading } = useUsers()
  if(isLoading) return 'cargando'
  return (
    <>
      <HistoryList>
        {
          data?.results.map((user, index) => (
            <HistoryButton key={index} username={user.login.username} img={user.picture.large} />
          ))
        }

      </HistoryList>
      <PostList />
    </>
  )
}
