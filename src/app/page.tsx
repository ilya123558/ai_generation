'use client'
import Image from "next/image"
import { LoginApiClient } from "@/entities/users/api/login.api"
import { setGenerationPoints, setUser, useAppDispatch } from "@/views/store"
import { retrieveRawInitData } from "@telegram-apps/sdk"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [pagesPrefetched, setPagesPrefetched] = useState(false)
  const [redirectPage, setRedirectPage] = useState<null | string>(null)

  useEffect(() => {
    const login = async () => {
      const init_data = retrieveRawInitData()
      try {
        if (init_data) {
          const data = await new LoginApiClient().loginByInitData(init_data);
          dispatch(setUser(data.user));
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
          alert("initData не доступно");
        }
      }
      catch (e) {
        alert(JSON.stringify(e))
      }
    };

    login();
  }, [dispatch, router]);

  useEffect(() => {
    const prefetchPages = async () => {
      try {
        await Promise.all([
          router.prefetch('/onboarding'),
          router.prefetch('/gender-selection'),
          router.prefetch('/home'),
          router.prefetch('/generation'),
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