/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import GuideHeader from './GuideHeader'
import GuideItem from './GuideItem'

const SectionWrapper = styled.div`
  background-color: #f7f9fc;
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

// interface GuideSectionProps {
//   headerActionText: string;
//   headerTitleText: string;
//   guideItems: GuideItemData[];
// }

const GuideSection = () => {
  return (
    <div>
      <SectionWrapper>
        <GuideHeader actionText="참여방법" titleText="공통 가이드" />
        <GuideItem
          title="간편회원가입"
          description="고객님의 본인 이메일 주소나 핸드폰을 통해 빠르고 쉽게 회원가입할 수 있어요."
        />
        <GuideItem
          title="게시물 작성"
          description="자신의 경험이나 정보를 공유하기 위해 게시물을 작성해요."
        />
        <GuideItem
          title="댓글 작성"
          description="다른 회원의 게시물에 대해 의견이나 질문을 남길 수 있어요."
        />
        <GuideItem
          title="SNS 게시"
          description="고객님의 사진, 동영상, 텍스트 등을 포함한 게시물을 작성해서 자신의 소식을 친구들과 공유할 수 있어요."
        />
        <GuideItem
          title="중고물품 등록"
          description="고객님이 판매/나눔하고자 하는 물품의 사진과 설명을 올려주세요."
        />
      </SectionWrapper>

      <SectionWrapper>
        <GuideHeader actionText="참여방법" titleText="공통 가이드" />
        <GuideItem description="고객님의 본인 이메일 주소나 핸드폰을 통해 빠르고 쉽게 회원가입할 수 있어요." />
        <GuideHeader titleText="공통 가이드" />
        <GuideItem description="고객님의 본인 이메일 주소나 핸드폰을 통해 빠르고 쉽게 회원가입할 수 있어요." />
      </SectionWrapper>
    </div>
  )
}

export default GuideSection

// /** @jsxImportSource @emotion/react */
// import styled from '@emotion/styled'
// import GuideHeader from './GuideHeader'
// import GuideItem from './GuideItem'

// const SectionWrapper = styled.div`
//   background-color: #f7f9fc;
//   padding: 20px;
//   border-radius: 12px;
//   max-width: 400px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// `

// // Data for Guide Items
// const guideItemsData = [
//   {
//     title: '간편회원가입',
//     description:
//       '고객님의 본인 이메일 주소나 핸드폰을 통해 빠르고 쉽게 회원가입할 수 있어요.',
//   },
//   {
//     description:
//       '고객님의 본인 이메일 주소나 핸드폰을 통해 빠르고 쉽게 회원가입할 수 있어요.',
//   }, // Without a title
//   {
//     title: '게시물 작성',
//     description: '자신의 경험이나 정보를 공유하기 위해 게시물을 작성해요.',
//   },
//   {
//     title: '댓글 작성',
//     description: '다른 회원의 게시물에 대해 의견이나 질문을 남길 수 있어요.',
//   },
//   {
//     title: 'SNS 게시',
//     description:
//       '고객님의 사진, 동영상, 텍스트 등을 포함한 게시물을 작성해서 자신의 소식을 친구들과 공유할 수 있어요.',
//   },
//   {
//     title: '중고물품 등록',
//     description:
//       '고객님이 판매/나눔하고자 하는 물품의 사진과 설명을 올려주세요.',
//   },
// ]

// const GuideSection = () => {
//   return (
//     <SectionWrapper>
//       <GuideHeader />
//       {guideItemsData.map((item, index) => (
//         <GuideItem
//           key={index}
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </SectionWrapper>
//   )
// }

// export default GuideSection
