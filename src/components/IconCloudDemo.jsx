import { IconCloud } from './magicui/icon-cloud'

const slugs = [
  'html5',
  'css3',
  'javascript',
  'react',
  'tailwindcss',
  'shadcnui',
  'nodedotjs',
  'express',
  'mongodb',
  'git',
  'github',
  'figma',
  'wordpress',
  'vercel',
  'amazonwebservices'
]

export function IconCloudDemo () {
  const images = slugs.map(slug => `https://cdn.simpleicons.org/${slug}/white`)

  return (
    <div className='relative flex size-full items-center justify-center overflow-hidden opacity-70'>
      <IconCloud images={images} />
    </div>
  )
}
