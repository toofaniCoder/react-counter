import { Typography, Container, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';
import { useSnapshot } from 'valtio';
import store, {
  increaseCounter,
  increaseBy,
  decreaseCounter,
  decreaseBy,
  reset,
} from './store';
const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#C2E0FB',
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5, 5),
  '&:hover': {
    backgroundColor: '#CCEAF5',
  },
}));

const Counter = (props) => {
  const { counter } = useSnapshot(store);
  return (
    <Container sx={containerStyle}>
      <Typography>{counter}</Typography>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={increaseCounter}>+</PrimaryButton>
          <PrimaryButton onClick={() => increaseBy(10)}>
            increase by 10
          </PrimaryButton>
        </Stack>

        <Stack spacing={2} direction="row">
          <PrimaryButton onClick={decreaseCounter}>-</PrimaryButton>
          <PrimaryButton onClick={() => decreaseBy(10)}>
            decrease by 10
          </PrimaryButton>
        </Stack>
        <PrimaryButton onClick={reset}>reset counter</PrimaryButton>
      </Stack>
    </Container>
  );
};

export default Counter;
