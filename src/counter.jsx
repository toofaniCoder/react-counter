import { Typography, Container, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

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
  return (
    <Container sx={containerStyle}>
      <Typography>10</Typography>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row">
          <PrimaryButton>+</PrimaryButton>
          <PrimaryButton>increase by 10</PrimaryButton>
        </Stack>

        <Stack spacing={2} direction="row">
          <PrimaryButton>-</PrimaryButton>
          <PrimaryButton>decrease by 10</PrimaryButton>
        </Stack>
        <PrimaryButton>reset counter</PrimaryButton>
      </Stack>
    </Container>
  );
};

export default Counter;
