import './styles.css'

interface HistoryCardProps {
  img: string
  alt?: string
  size?: number
  username?: string
}

export function HistoryCard({ img, alt, username, size }: HistoryCardProps) {
  const cardStyle = {width: size, height: size}
  const fontStyle = {fontSize: `${size/3.5}px`}
  return (
    <button className='history-card'>
      <div style={cardStyle || ''}>
        <img src={img} alt={alt || 'Image'} />
      </div>
      {username ? <small style={fontStyle || ''}>{username}</small> : ''}
    </button>
  )
}