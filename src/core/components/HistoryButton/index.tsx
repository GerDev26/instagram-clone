import './styles.css'

interface HistoryButtonProps {
  img: string
  alt?: string
  size?: number
  username?: string
}

export function HistoryButton({ img, alt, username, size }: HistoryButtonProps) {
  const cardStyle = {width: size, height: size}
  const fontStyle = {fontSize: `${size/3.5}px`}
  return (
    <button className='history-button'>
      <div style={cardStyle || ''}>
        <img src={img} alt={alt || 'Image'} />
      </div>
      {username ? <small style={fontStyle || ''}>{username}</small> : ''}
    </button>
  )
}