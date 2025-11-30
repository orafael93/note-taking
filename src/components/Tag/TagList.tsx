import styled from "styled-components";

type TagListProps = {
  tags: string[];
};

const TagContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[50]};
  flex-wrap: wrap;
`;

const TagItem = styled.span`
  ${({ theme }) => theme.typography.presets.body2}
  background: ${({ theme }) => theme.colors.neutral[700]};
  color: ${({ theme }) => theme.colors.neutral[300]};
  padding: ${({ theme }) => `${theme.spacing[25]} ${theme.spacing[75]}`};
  border-radius: 4px;
`;

export const TagList = ({ tags }: TagListProps) => {
  return (
    <TagContainer>
      {tags.map((tag) => (
        <TagItem key={tag}>{tag}</TagItem>
      ))}
    </TagContainer>
  );
};
