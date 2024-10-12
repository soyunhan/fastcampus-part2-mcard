import { Suspense, useEffect } from 'react'

import Top from '@shared/Top'
import AdBanners from '@components/home/AdBanners'
import CardList from '@components/home/CardList'
import ListRow from '@shared/ListRow'
import { getCards } from '@/remote/card'
import { getAdBanners } from '@/remote/adBanner'
// import AdBannerListAddButton from '@/components/test/AdBannerListAddButton'
// import CardListAddButton from '@/components/test/CardListAddButton'

function HomePage() {
  useEffect(() => {
    getCards().then((response) => {
      console.log('response', response)
    })
    getAdBanners().then((response) => {
      console.log('response', response)
    })
  }, [])

  return (
    <div>
      {/* <AdBannerListAddButton />
      <CardListAddButton /> */}

      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
      <AdBanners />
      <Suspense
        fallback={[...new Array(10)].map((_, idx) => (
          <ListRow.Skeleton key={idx} />
        ))}
      >
        <CardList />
      </Suspense>
    </div>
  )
}

export default HomePage
