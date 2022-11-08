import { Typography, Container, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import converter from 'number-to-words';

const counterState = atom({
  key: 'counter',
  default: 0,
});

const counterWordState = selector({
  key: 'counterWordState',
  get: ({ get }) => {
    const num = get(counterState);
    return converter.toWords(num);
  },
});

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ffab91',
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5, 5),
  '&:hover': {
    backgroundColor: '#ff9e80',
  },
}));

const Counter = (props) => {
  const [counter, setCounter] = useRecoilState(counterState);
  const word = useRecoilValue(counterWordState);
  return (
    <Container sx={containerStyle}>
      <Typography>{counter}</Typography>
      <Typography variant="h5" gutterBottom>
        {word}
      </Typography>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={() => setCounter(counter + 1)}>
            +
          </PrimaryButton>
          <PrimaryButton onClick={() => setCounter(counter + 10)}>
            increase by 10
          </PrimaryButton>
        </Stack>

        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={() => setCounter(counter - 1)}>
            -
          </PrimaryButton>
          <PrimaryButton onClick={() => setCounter(counter + 1)}>
            decrease by 10
          </PrimaryButton>
        </Stack>
        <PrimaryButton onClick={() => setCounter(0)}>
          reset counter
        </PrimaryButton>
      </Stack>
    </Container>
  );
};

export default Counter;
