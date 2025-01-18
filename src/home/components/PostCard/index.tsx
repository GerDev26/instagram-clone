import { BookmarkIcon, ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, FaceSmileIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { HistoryButton } from '../../../core/components/HistoryButton'
import './styles.css'

function timeDifference(date: string | Date): string {
  const targetDate = typeof date === 'string' ? new Date(date) : date

  if (isNaN(targetDate.getTime())) {
    throw new Error('Invalid date input')
  }

  const now = new Date()
  const diff = Math.abs(targetDate.getTime() - now.getTime())

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d`
  if (hours > 0) return `${hours}h`
  if (minutes > 0) return `${minutes} min`
  return `${seconds} seg`
}

interface PostCardProps {
  username: string
  userProfilePhoto: string
  audio: string
  date: Date | string
  verified: boolean
  mediaUrl: string
  description: string
  likes: number
}

export function PostCard({ username, userProfilePhoto, audio, date, verified, mediaUrl, description, likes  }: PostCardProps) {
  const check = verified ? <CheckBadgeIcon color='#0095f6' width={16} /> : ''
  const postAudio = audio || ''
  const timeAgo = timeDifference(date)
  return (
    <article className='post'>
      <header>
        <HistoryButton size={38} img={userProfilePhoto}/>
        <div>
          <span>
            <p>{username}</p>
            {check}
            <p>• {timeAgo}</p>
          </span>
          <span>
            <p>{postAudio}</p>
          </span>
        </div>
        <EllipsisHorizontalIcon width={28} />
      </header>

      <figure>
        <img src={mediaUrl} alt="" />
      </figure>

      <div>
        <HeartIcon width={28} />
        <ChatBubbleOvalLeftIcon width={28} />
        <PaperAirplaneIcon width={28} />
        <BookmarkIcon width={28} />
      </div>

      <footer>
        <p>{likes} Me gusta</p>
        <p><strong>{username}</strong> {description} </p>
        <p>Ver comentarios</p>
        <div>
          <p>Agregar un comentario...</p>
          <FaceSmileIcon width={16}/>
        </div>
      </footer>
    </article>
  )
}