import { GenerationInput } from '@/shared/generation-input/GenerationInput'
import { ShadowWrapper } from '@/shared/wrappers/shadow-wrapper/ShadowWrapper'
import { CreatorMode } from '../creator-mode/CreatorMode'

const categoryList = [
  'Classic',
  'Realistic',
  'Classic',
  'Realistic',
  'Classic',
  'Realistic',
  'Classic',
  'Realistic',
  'Classic',
  'Realistic',
  'Classic',
  'Realistic',
]

export const SelectStyleGeneration = () => {
  const handleCategorySelect = (category: string) => {}

  return (
    <div className="flex flex-col gap-[2.43vw] mb-[15.78vw] items-end w-full bg-transparent relative z-[2]">
      <CreatorMode />
      <div className="grid grid-cols-2 gap-[2.14vw] w-full overflow-hidden h-[30vw] overflow-y-scroll pb-[5vw]">
        {categoryList.map((categoryItem, index) => (
          <button onClick={() => handleCategorySelect(categoryItem)} key={index} className='transition-all active:scale-95'>
            <ShadowWrapper
              borderRadius={9}
              className="!bg-white fs-16 font-normal flex items-center justify-center h-[14.17vw]"
            >
              {categoryItem}
            </ShadowWrapper>
          </button>
        ))}
      </div>
      <GenerationInput />
    </div>
  )
}
