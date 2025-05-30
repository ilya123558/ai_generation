'use client'
import { useAppSelector } from '@/views/store';
import { IChat } from '@/entities/generations/types/chat';
import { Resolution9x16 } from './ui/Resolution9x16';
import { Resolution2x3 } from './ui/Resolution2x3';
import { Resolution1x1 } from './ui/Resolution1x1';
import { Resolution2x135x1 } from './ui/Resolution2x135x1';
import { Resolution16x9 } from './ui/Resolution16x9';
import { Resolution4x3 } from './ui/Resolution4x3';

interface IProps {
  generations?: IChat[]
}

export const ChatSliderResolution = ({generations}: IProps) => {
  const { resolution } = useAppSelector(state => state.main.accountData)
  const { isCreatingImage } = useAppSelector(state => state.main.meta)

  if(resolution === '1:1') return <Resolution1x1 generations={generations} showSkeleton={isCreatingImage} />
  if(resolution === '16:9') return <Resolution16x9 generations={generations} showSkeleton={isCreatingImage} />
  if(resolution === '2:3') return <Resolution2x3 generations={generations} showSkeleton={isCreatingImage} />
  if(resolution === '2.35:1') return <Resolution2x135x1 generations={generations} showSkeleton={isCreatingImage} />
  if(resolution === '4:3') return <Resolution4x3 generations={generations} showSkeleton={isCreatingImage} />
  if(resolution === '9:16') return <Resolution9x16 generations={generations} showSkeleton={isCreatingImage} />

  return <Resolution9x16 generations={generations} showSkeleton={isCreatingImage} />
};