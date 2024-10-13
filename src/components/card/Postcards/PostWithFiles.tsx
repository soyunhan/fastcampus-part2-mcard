/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import { FaFileImage, FaFilePdf } from 'react-icons/fa'

interface FileItemProps {
  fileName: string
  fileType: 'image' | 'pdf'
}

const PostWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Content = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`

const FileListWrapper = styled.div`
  margin-top: 10px;
`

const FileItemWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`

const FileIcon = styled.div`
  margin-right: 10px;
`

const FileName = styled.div`
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const FileItem: React.FC<FileItemProps> = ({ fileName, fileType }) => {
  return (
    <FileItemWrapper>
      <FileIcon>
        {fileType === 'image' ? (
          <FaFileImage size={24} color="#1E90FF" />
        ) : (
          <FaFilePdf size={24} color="#FF4500" />
        )}
      </FileIcon>
      <FileName>{fileName}</FileName>
    </FileItemWrapper>
  )
}

const PostWithFiles: React.FC = () => {
  const files = [
    {
      fileName: '파일 이름 파일 이름 파일 이름 파일 이름.jpg',
      fileType: 'image' as 'image',
    },
    { fileName: '파일 이름 파일 이름.pdf', fileType: 'pdf' as 'pdf' },
  ]

  return (
    <PostWrapper>
      <Title>외국인 생활금융 플랫폼 커뮤니티 제목</Title>
      <Content>
        전북은행 외국인 생활금융 플랫폼 Jeonbuk Bank's Foreign Living Finance
        Platform 커뮤니티 내용입니다. 내용 가득
      </Content>
      <Content>
        전북은행 외국인 생활금융 플랫폼 Jeonbuk Bank's Foreign Living Finance
        Platform 커뮤니티 내용입니다. 내용 가득
      </Content>
      <FileListWrapper>
        {files.map((file, index) => (
          <FileItem
            key={index}
            fileName={file.fileName}
            fileType={file.fileType}
          />
        ))}
      </FileListWrapper>
    </PostWrapper>
  )
}

export default PostWithFiles
