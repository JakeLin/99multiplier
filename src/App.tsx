import React, { useEffect } from 'react';
import useState from 'react-usestateref';
import styled from 'styled-components';
import { Chip, Button, Snackbar, Alert } from '@mui/material';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
`;

const SubContainer = styled.div`
  width: 100%;
`;

const FormulaRow = styled.div`
  padding: 48px 0;
  display: flex;
  justify-content: space-between;
`;

const NumberRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const App : React.FC  = () => {
  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);
  const [answer, setAnswer, answerRef] = useState('');
  const [isShowingSuccessMessage, setIsShowingSuccessMessage] = useState(false);
  const [isShowingErrorMessage, setIsShowingErrorMessage] = useState(false);

  const getRandomPositiveInt = (max: number): number => {
    return Math.floor(Math.random() * max); 
  };

  const startGame = () => {
    setLeftNumber(getRandomPositiveInt(10));
    setRightNumber(getRandomPositiveInt(10));
    setAnswer('??');
  };

  const checkAnswer = () => {
    if (answerRef.current === (leftNumber * rightNumber).toString()) {
      setIsShowingSuccessMessage(true);
    } else if (leftNumber * rightNumber < 10) {
      setIsShowingErrorMessage(true);
    } else if (answerRef.current.length === 2 && leftNumber * rightNumber >= 10) {
      setIsShowingErrorMessage(true);
    }
  };

  const onNumberPressed = (num: number) => {
    if (answer === '??') {
      setAnswer(num.toString());
    } else if (answer.length >= 2) {
      return;
    } else {
      setAnswer((previousValue) => {
        return previousValue + num.toString();
      });
    }
 
    checkAnswer();
  };

  const onNumberDeleted = () => {
    if (answer === '??') {
      return;
    } else if (answer.length === 1) {
      setAnswer('??');
    } else {
      setAnswer((previousValue) => {
        return previousValue.substring(0, previousValue.length - 1);
      });
    }
  };

  const onSuccessMessageClose = () => {
    setIsShowingSuccessMessage(false);
    startGame();
  };

  const onErrorMessageClose = () => {
    setIsShowingErrorMessage(false);
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <Container>
      <SubContainer>
        <FormulaRow>
          <Chip label={leftNumber} sx={{ width: 50, height: 50, fontSize: 20 }} color="primary" />
          <Chip label="X" sx={{ width: 50, height: 50 }} color="primary" variant="outlined" />
          <Chip label={rightNumber} sx={{ width: 50, height: 50, fontSize: 20 }} color="primary" />
          <Chip label="=" sx={{ width: 50, height: 50 }} color="primary" variant="outlined" />
          <Chip label={answer} sx={{ width: 50, height: 50, fontSize: 20 }} color="primary" />
        </FormulaRow>
        <NumberRow>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(1)}>1</Button>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(2)}>2</Button>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(3)}>3</Button>
        </NumberRow>
        <NumberRow>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(4)}>4</Button>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(5)}>5</Button>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(6)}>6</Button>
        </NumberRow>
        <NumberRow>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(7)}>7</Button>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(8)}>8</Button>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(9)}>9</Button>
        </NumberRow>
        <NumberRow>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={ () => onNumberPressed(0)}>0</Button>
          <Button variant="outlined" sx={{ width: 80, height: 80 }} onClick={onNumberDeleted}>⌫</Button>
        </NumberRow>
        <Snackbar open={isShowingSuccessMessage} autoHideDuration={1000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={onSuccessMessageClose} >
          <Alert severity="success" sx={{ width: '100%' }}>
            Well done!
          </Alert>
        </Snackbar>
        <Snackbar open={isShowingErrorMessage} autoHideDuration={1000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={onErrorMessageClose} >
          <Alert severity="error" sx={{ width: '100%' }}>
            Please try again!
          </Alert>
        </Snackbar>
      </SubContainer>
    </Container>
  );
};

export default App;
