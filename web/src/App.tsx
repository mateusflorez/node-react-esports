import './styles/main.css'
import LogoImg from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className='w-auto h-auto bg-[#121214] bg-galaxy bg-cover bg-no-repeat'>
      <div className='max-w-[1344px] mx-auto flex flex-col items-center py-20'>
        <img src={LogoImg} />

        <h1 className='text-6xl text-white font-black mt-20'>Your <span className='bg-rainbow-gradient text-transparent bg-clip-text'>duo</span> is here.</h1>

        <div className='grid grid-cols-6 gap-6 mt-16'>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image1.png" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='text-white font-bold block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm'>4 Ads</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image2.png" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='text-white font-bold block'>Dota 2</strong>
              <span className='text-zinc-300 text-sm'>4 Ads</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image3.png" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='text-white font-bold block'>CS:GO</strong>
              <span className='text-zinc-300 text-sm'>4 Ads</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image4.png" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='text-white font-bold block'>Apex Legends</strong>
              <span className='text-zinc-300 text-sm'>4 Ads</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image5.png" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='text-white font-bold block'>Fortnite</strong>
              <span className='text-zinc-300 text-sm'>4 Ads</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/games/image6.png" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='text-white font-bold block'>World of Warcraft</strong>
              <span className='text-zinc-300 text-sm'>4 Ads</span>
            </div>
          </a>
        </div>

        <div className='pt-1 mt-8 bg-rainbow-gradient self-stretch rounded-lg overflow-hidden'>
          <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
            <div>
              <strong className='text-2xl text-white font-black block'>Didn't find your duo?</strong>
              <span className='text-zinc-400'>Post an ad to find new players!</span>
            </div>
            <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 transition text-white rounded flex items-center gap-3'>
              <MagnifyingGlassPlus size={24} />
              Post ad
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
