/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const ImageWrapper = styled.div`
  margin-bottom: 20px;
`

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`

interface PostImageProps {
  imageUrl: string
}

const PostImage: React.FC<PostImageProps> = ({ imageUrl }) => {
  return (
    <ImageWrapper>
      <Image src={imageUrl} alt="Post Image" />
    </ImageWrapper>
  )
}

export default PostImage
