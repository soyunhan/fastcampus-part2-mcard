/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled";

// 타입 정의
interface Option {
  id: number;
  name: string;
  votes: number;
}

interface VotePollProps {
  pollTitle: string; // 투표 제목
  options: Option[]; // 투표 항목 리스트
  deadline: string;  // 마감일
}

const VotePoll: React.FC<VotePollProps> = ({ pollTitle, options, deadline }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [voteOptions, setVoteOptions] = useState<Option[]>(options); // 투표 항목 상태
  const [totalVotes, setTotalVotes] = useState<number>(
    options.reduce((acc, option) => acc + option.votes, 0)
  );
  const [showResults, setShowResults] = useState<boolean>(false);

  // 투표 핸들러
  const handleVote = (id: number) => {
    if (!showResults) {  // 투표 결과가 보이지 않을 때만 투표 가능
      const updatedOptions = voteOptions.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option
      );
      setSelectedOption(id);
      setVoteOptions(updatedOptions); // 투표 항목 업데이트
      setTotalVotes(totalVotes + 1);  // 총 투표 수 업데이트
    }
  };

  // 결과 보기 핸들러
  const handleShowResults = () => {
    setShowResults(true);  // 투표 결과 보기
  };

  // 투표 다시하기 핸들러
  const handleResetVote = () => {
    setSelectedOption(null);
    setVoteOptions(options); // 투표 항목 초기화
    setTotalVotes(options.reduce((acc, option) => acc + option.votes, 0)); // 총 투표 수 초기화
    setShowResults(false);  // 결과 숨기기
  };

  return (
    <PollContainer>
      <Title>{pollTitle}</Title>
      {voteOptions.map((option) => (
        <VoteOption
          key={option.id}
          option={option}
          handleVote={handleVote}
          selectedOption={selectedOption}
          totalVotes={totalVotes}
          showResults={showResults}
        />
      ))}
      {!showResults ? (
        <VoteButton onClick={handleShowResults}>투표하기</VoteButton>
      ) : (
        <VoteButton onClick={handleResetVote}>투표 다시하기</VoteButton>
      )}
      <FooterText>{`${totalVotes}표 • ${deadline} 까지`}</FooterText>
    </PollContainer>
  );
};

interface VoteOptionProps {
  option: {
    id: number;
    name: string;
    votes: number;
  };
  handleVote: (id: number) => void;
  selectedOption: number | null;
  totalVotes: number;
  showResults: boolean;
}

const VoteOption: React.FC<VoteOptionProps> = ({
  option,
  handleVote,
  selectedOption,
  totalVotes,
  showResults,
}) => {
  const isSelected = selectedOption === option.id;
  const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;

  return (
    <OptionContainer
      onClick={() => handleVote(option.id)}
      selected={isSelected}
      disabled={showResults}
      percentage={percentage}
      showResults={showResults} // 퍼센트 표시 시 배경 적용
    >
      <OptionText showResults={showResults}>
        {option.name}
        {isSelected && showResults && <CheckIcon>✔️</CheckIcon>}
      </OptionText>
      {showResults && <PercentageText>{`${percentage.toFixed(0)}%`}</PercentageText>}
    </OptionContainer>
  );
};

// 스타일 정의 (Emotion 사용)
const PollContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  color: #888;
  text-align: center;
  margin-top: 10px;
`;

interface OptionContainerProps {
  selected: boolean;
  disabled: boolean;
  percentage: number;
  showResults: boolean;
}

const OptionContainer = styled.div<OptionContainerProps>`
  padding: 15px;
  margin-bottom: 10px;
  background-color: ${({ selected }) => (selected ? "#d0f0ff" : "#fff")};
  background-image: ${({ showResults, percentage }) =>
    showResults ? `linear-gradient(to right, #d0f0ff ${percentage}%, #fff ${percentage}%)` : "none"};
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  display: flex;
  justify-content: ${({ showResults }) => (showResults ? "space-between" : "center")}; // 텍스트 정렬
  align-items: center;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

interface OptionTextProps {
  showResults: boolean;
}

const OptionText = styled.span<OptionTextProps>`
  font-size: 1rem;
  text-align: ${({ showResults }) => (showResults ? "left" : "center")}; // 텍스트 정렬
  display: flex;
  align-items: center; /* 체크 아이콘과 텍스트 정렬 */
  width: ${({ showResults }) => (showResults ? "100%" : "auto")}; // 투표 전에는 넓이 고정하지 않음
`;

const PercentageText = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const CheckIcon = styled.span`
  font-size: 1rem;
  color: #007bff;
  margin-left: 10px;
`;

const VoteButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default VotePoll;
