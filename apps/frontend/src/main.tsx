import { StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import ActionComponents from './components/ActionComponents/ActionComponent';
import { QueueComponent } from './components/QueueComponents/QueueComponent';
import { QueueProvider } from './context/queueContext';
import { GlobalStyle } from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') ?? document.body
);

// @INFO: styled-components is installed, you can use it if you want ;)
const Container = styled.div``;

// const response = ActionComponents()
root.render(
  <StrictMode>
      <GlobalStyle/>
      <Container>Good luck ! </Container>
      <QueueProvider>
        <ActionComponents />
        <QueueComponent />
      </QueueProvider>
  </StrictMode>
);
