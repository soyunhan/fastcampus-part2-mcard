/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaChevronDown, FaImage } from 'react-icons/fa'
import { useState } from 'react'

const FormWrapper = styled.div`
  width: 100%;
  /* margin: 0 auto;
  padding: 20px; */
  background-color: #fff;
  border-radius: 10px;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #e1e8ed;
  margin-bottom: 20px;
  outline: none;
  color: #666;
`

const ContentWrapper = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #e1e8ed;
  height: 100px;
  outline: none;
  resize: none;
  color: #666;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  padding: 10px;
  color: #666;
  font-size: 16px;
  ::placeholder {
    color: #999;
  }
`

const ImageUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
`

const ImageIcon = styled(FaImage)`
  font-size: 24px;
  color: #ccc;
  cursor: pointer;
`

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
`

const CharacterCount = styled.span`
  font-size: 12px;
  color: #99a1b3;
`

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: transparent;
  border: 1px solid #007bff;
  color: #007bff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`

function PostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [posts, setPosts] = useState<
    Array<{ title: string; content: string; image: string | null }>
  >([])

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const imageURL = URL.createObjectURL(file)
      setImage(imageURL)
    }
  }

  const handleSubmit = () => {
    const newPost = {
      title,
      content,
      image,
    }
    setPosts([...posts, newPost]) // 새로운 게시물 추가
    setTitle('') // 제목 초기화
    setContent('') // 내용 초기화
    setImage(null) // 이미지 초기화
  }

  return (
    <FormWrapper>
      <Title>게시글 등록</Title>
      <Input
        type="text"
        placeholder="제목을 입력해 주세요."
        value={title}
        onChange={handleTitleChange}
      />
      {/* 이미지가 업로드된 경우 텍스트 영역을 숨기고 이미지를 표시 */}
      <ContentWrapper>
        {image ? (
          <PreviewImage src={image} alt="Uploaded Image" />
        ) : (
          <Textarea
            placeholder="내용을 입력해 주세요"
            value={content}
            onChange={handleContentChange}
          />
        )}
      </ContentWrapper>

      <ImageUploadWrapper>
        <label htmlFor="image-upload">
          <ImageIcon />
        </label>
        <input
          id="image-upload"
          type="file"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <CharacterCount>{content.length}/100자</CharacterCount>
      </ImageUploadWrapper>

      <Button onClick={handleSubmit}>게시물 등록</Button>

      {/* 등록된 게시물들을 렌더링 */}
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="게시물 이미지" />}
        </div>
      ))}
    </FormWrapper>
  )
}

export default PostForm
