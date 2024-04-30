import {useState, useEffect, useContext, FC} from 'react';
import styled from 'styled-components';
import ActionCard from './ActionCard';
import { Action, getActions } from '../../api/action';
import { enqueue } from '../../api/queue';
import { QueueContext } from '../../context/queueContext';

const SuccessMessage = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  color: #333;
  z-index: 1000;
`;

const SuccessText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #2ecc71;
`;

const ActionComponents: FC = () => {
  const [actionsState, setActionsState] = useState<Action[]>([]);
  const [successMessageState, setSuccessMessageState] = useState('');
  const { addToQueue } = useContext(QueueContext);

  useEffect(() => {
    getActions()
      .then((response) => {
        setActionsState(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [actionsState]);

  useEffect(() => {
    if (successMessageState) {
      setTimeout(() => {
        setSuccessMessageState('');
      }, 2000);
    }
  }, [successMessageState]);

  const handleClick = (data: number, name: string) => {
    enqueue(name);
    addToQueue(name);
    setSuccessMessageState(`${name}: added to queue successfully!`);
  };

  return (
    <div style={{ border: '1px solid black', padding: '5px' }}>
      <h1>Click on the Action that you want to add in the queue</h1>
      {successMessageState && (
        <SuccessMessage>
          <SuccessText>{successMessageState}</SuccessText>
        </SuccessMessage>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {actionsState.map((action, index) => (
          <ActionCard key={index} action={action} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default ActionComponents;