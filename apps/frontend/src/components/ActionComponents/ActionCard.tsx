import styled from 'styled-components';
import { Action} from '../../api/action';


interface Props {
  action: Action
  onClick: (data: number, name: string) => void;
}

const Card = styled.div`
width: 200px;
height: 200px;
background-color: #eee;
border: 1px solid #ccc;
padding: 5px;
margin: 5px;
`;

const ActionCard = ({ action, onClick }: Props) => {
  return (
    <Card style={{cursor: 'pointer' }} onClick={() => onClick(action.maxCredits, action.name)}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>{action.name}</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>credits: {action.credits}</span>
        <span>Max credits: {action.maxCredits}</span>
      </div>
    </Card>
  );
};

export default ActionCard;
