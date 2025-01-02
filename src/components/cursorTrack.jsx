import { useEffect, useRef } from 'react'

const CursorTrack = () => {
  const originPosition = { x: 0, y: 0 }

  const last = useRef({
    starTimestamp: new Date().getTime(),
    starPosition: originPosition,
    mousePosition: originPosition
  })

  const config = {
    starAnimationDuration: 500,
    minimumTimeBetweenStars: 250,
    minimumDistanceBetweenStars: 75,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    colors: ['51 255 51', '255 0 127'],
    sizes: ['1.4rem', '1rem', '0.6rem'],
    animations: ['fall-1', 'fall-2', 'fall-3']
  }

  let count = 0

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const selectRandom = items => items[rand(0, items.length - 1)]

  const px = value => `${value}px`

  const calcDistance = (a, b) => Math.hypot(b.x - a.x, b.y - a.y)

  const appendElement = element => document.body.appendChild(element)
  const removeElement = (element, delay) =>
    setTimeout(() => document.body.removeChild(element), delay)

  const createStar = position => {
    const star = document.createElement('span')
    const color = selectRandom(config.colors)

    star.className = 'star fa-solid fa-star'
    star.style.left = px(position.x)
    star.style.top = px(position.y)
    star.style.fontSize = selectRandom(config.sizes)
    star.style.color = `rgb(${color})`
    star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`
    star.style.animationName = config.animations[count++ % 3]

    appendElement(star)
    removeElement(star, config.starAnimationDuration)
  }

  const createGlowPoint = position => {
    const glow = document.createElement('div')
    glow.className = 'glow-point'
    glow.style.left = px(position.x)
    glow.style.top = px(position.y)
    appendElement(glow)
    removeElement(glow, config.glowDuration)
  }

  const createGlow = (last, current) => {
    const distance = calcDistance(last, current)
    const quantity = Math.max(
      Math.floor(distance / config.maximumGlowPointSpacing),
      1
    )

    const dx = (current.x - last.x) / quantity
    const dy = (current.y - last.y) / quantity

    Array.from({ length: quantity }).forEach((_, index) => {
      createGlowPoint({ x: last.x + dx * index, y: last.y + dy * index })
    })
  }

  const handleOnMove = e => {
    const mousePosition = { x: e.clientX, y: e.clientY }
    const now = new Date().getTime()
    const hasMovedFarEnough =
      calcDistance(last.current.starPosition, mousePosition) >=
      config.minimumDistanceBetweenStars
    const hasBeenLongEnough =
      now - last.current.starTimestamp > config.minimumTimeBetweenStars

    if (hasMovedFarEnough || hasBeenLongEnough) {
      createStar(mousePosition)
      last.current.starTimestamp = now
      last.current.starPosition = mousePosition
    }

    createGlow(last.current.mousePosition, mousePosition)
    last.current.mousePosition = mousePosition
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleOnMove)
    window.addEventListener('touchmove', e => handleOnMove(e.touches[0]))

    return () => {
      window.removeEventListener('mousemove', handleOnMove)
      window.removeEventListener('touchmove', e => handleOnMove(e.touches[0]))
    }
  }, [])

  return null
}

export default CursorTrack
