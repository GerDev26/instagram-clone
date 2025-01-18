import { PostCard } from '../../components/PostCard'
import './styles.css'

export function PostList(){

  const posts = [
    {
      id: 1,
      username: 'kikobeats',
      userProfilePhoto: 'https://unavatar.io/kikobeats',
      audio: 'Audio sample 1',
      date: '2025-01-15T15:30:00Z',
      verified: true,
      postImage: 'https://via.placeholder.com/500',
      description: 'Explorando el mundo de la programación y el diseño.',
      likes: 768
    },
    {
      id: 2,
      username: 'johndoe',
      userProfilePhoto: 'https://unavatar.io/johndoe',
      audio: 'Audio sample 2',
      date: '2025-01-16T12:00:00Z',
      verified: false,
      postImage: 'https://via.placeholder.com/600',
      description: 'Aventuras por la montaña, una experiencia inolvidable.',
      likes: 130
    },
    {
      id: 3,
      username: 'janedoe',
      userProfilePhoto: 'https://unavatar.io/janedoe',
      audio: '',
      date: '2025-01-17T09:45:00Z',
      verified: true,
      postImage: 'https://via.placeholder.com/700',
      description: 'Un café para comenzar el día con energía.',
      likes: 682
    },
    {
      id: 4,
      username: 'user4',
      userProfilePhoto: 'https://unavatar.io/user4',
      audio: '',
      date: '2025-01-18T05:49:00Z',
      verified: false,
      postImage: 'https://via.placeholder.com/607',
      description: 'Random post description 4.',
      likes: 604
    },
    {
      id: 5,
      username: 'user5',
      userProfilePhoto: 'https://unavatar.io/user5',
      audio: '',
      date: '2025-01-10T03:46:00Z',
      verified: true,
      postImage: 'https://via.placeholder.com/523',
      description: 'Random post description 5.',
      likes: 440
    },
    {
      id: 6,
      username: 'user6',
      userProfilePhoto: 'https://unavatar.io/user6',
      audio: 'Audio sample 6',
      date: '2025-01-14T02:41:00Z',
      verified: true,
      postImage: 'https://via.placeholder.com/597',
      description: 'Random post description 6.',
      likes: 52
    },
    {
      id: 7,
      username: 'user7',
      userProfilePhoto: 'https://unavatar.io/user7',
      audio: '',
      date: '2025-01-11T10:26:00Z',
      verified: true,
      postImage: 'https://via.placeholder.com/605',
      description: 'Random post description 7.',
      likes: 760
    },
    {
      id: 8,
      username: 'user8',
      userProfilePhoto: 'https://unavatar.io/user8',
      audio: '',
      date: '2025-01-20T01:28:00Z',
      verified: true,
      postImage: 'https://via.placeholder.com/531',
      description: 'Random post description 8.',
      likes: 678
    },
    {
      id: 9,
      username: 'user9',
      userProfilePhoto: 'https://unavatar.io/user9',
      audio: '',
      date: '2025-01-17T23:09:00Z',
      verified: false,
      postImage: 'https://via.placeholder.com/515',
      description: 'Random post description 9.',
      likes: 196
    },
    {
      id: 10,
      username: 'user10',
      userProfilePhoto: 'https://unavatar.io/user10',
      audio: 'Audio sample 10',
      date: '2025-01-20T13:42:00Z',
      verified: true,
      postImage: 'https://via.placeholder.com/581',
      description: 'Random post description 10.',
      likes: 52
    }
  ]

  return (
    <section className='post-list'>
      {posts.map(p => (
        <PostCard
          mediaUrl='/assets/images/tati.jpg'
          likes={p.likes}
          key={p.id}
          verified={p.verified}
          date={p.date}
          audio={p.audio}
          username={p.username}
          userProfilePhoto={p.userProfilePhoto}
          description={p.description}
        />
      ))}
    </section>
  )
}