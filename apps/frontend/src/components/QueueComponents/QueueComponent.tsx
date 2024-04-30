import styled from 'styled-components';
import { useContext } from 'react';
import { QueueContext } from '../../context/queueContext';

const QueueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const QueueItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const QueueItemText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const QueueComponent = () => {
  const { queue } = useContext(QueueContext);

  return (
    <QueueContainer>
      {queue.map((item: string, index: number) => (
        <QueueItem key={index}>
          <QueueItemText>{item}</QueueItemText>
        </QueueItem>
      ))}
    </QueueContainer>
  );
};