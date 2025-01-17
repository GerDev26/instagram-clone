import { BookmarkIcon, ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, FaceSmileIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { HistoryCard } from '../HistoryCard'
import './styles.css'

export function PostCard() {
  return (
    <article className='post'>
      <header>
        <HistoryCard size={38} img='https://unavatar.io/kikobeats'/>
        <div>
          <span>
            <p>Username</p>
            <p>check</p>
            <p>minutes</p>
          </span>
          <span>
            <p>audio</p>
          </span>
        </div>
        <EllipsisHorizontalIcon width={28} />
      </header>

      <figure>
        <img src="/tati.jpg" alt="" />
      </figure>

      <div>
        <HeartIcon width={28} />
        <ChatBubbleOvalLeftIcon width={28} />
        <PaperAirplaneIcon width={28} />
        <BookmarkIcon width={28} />
      </div>

      <footer>
        <p><strong>Le gusta a...</strong></p>
        <p><strong>username</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sint, vitae quidem quam quaerat aspernatur. Corporis eaque voluptas iusto illo accusamus. Omnis alias veniam saepe deserunt voluptates accusamus molestias cum.</p>
        <p>Ver comentarios</p>
        <div>
          <p>Agregar comentario</p>
          <FaceSmileIcon width={16}/>
        </div>
      </footer>
    </article>
  )
}