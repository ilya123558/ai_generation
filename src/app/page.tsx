'use client'
import Image from "next/image"
import { LoginApiClient } from "@/entities/users/api/login.api"
import { setGenerationPoints, setResolution, setUser, useAppDispatch } from "@/views/store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useTelegram } from "@/utils/hooks/useTelegram"
import { usePreloadImages } from "@/utils/hooks/usePreloadImages"
// import { init } from "@telegram-apps/sdk";

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [pagesPrefetched, setPagesPrefetched] = useState(false)
  const [redirectPage, setRedirectPage] = useState<null | string>(null)

  const { webApp } = useTelegram()
  usePreloadImages()

  useEffect(() => {
    const login = async() => {
      if(!webApp) return

      // init()
      const init_data = webApp.initData
  
      try {
        if (init_data) {
          const apiClient = new LoginApiClient();
          const data = await apiClient.loginByInitData(init_data);
          dispatch(setUser(data.user));
          dispatch(setResolution(data.user.resolution));
          dispatch(setGenerationPoints(data.user.tokensCount));
          
          if(data.user.role === 'new') {
            setRedirectPage('/onboarding')
          }
          else if(data.user.role === 'pending') {
            setRedirectPage('/profile-create-loading')
          }
          else {
            setRedirectPage('/home')
          }
  
        } else {
          alert("initData not found");
        }
      }
      catch (e) {}
    }

    login()

  }, [dispatch, router, webApp]);

  useEffect(() => {
    const prefetchPages = async () => {
      try {
        await Promise.all([
          router.prefetch('/onboarding'),
          router.prefetch('/gender-selection'),
          router.prefetch('/home'),
          router.prefetch('/chat'),
          router.prefetch('/profile'),
          router.prefetch('/profile-create'),
          router.prefetch('/profile-create-loading'),
          router.prefetch('/store'),
          router.prefetch('/store/generation'),
          router.prefetch('/category/id')
        ])

        // Все страницы подгружены
        setPagesPrefetched(true)
      } catch (error) {}
    }

    prefetchPages()
  }, [])

  useEffect(() => {
    if(pagesPrefetched && redirectPage) {
      router.push(redirectPage)
    }
  }, [pagesPrefetched, redirectPage])

  return (
    <section className="fixed w-screen h-screen top-0 left-0 bg-primary flex items-center justify-center">
      <h1 className="fs-30 font-medium text-background">Photiqe</h1>
      <div className="absolute opacity-0">
        <Image
          src={'/images/onboarding/image-1.png'}
          alt="onboarding-image"
          width={375}
          height={375}
        />
      </div>
    </section>
  )
}