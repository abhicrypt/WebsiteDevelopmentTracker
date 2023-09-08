import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/system';

const YellowCard = styled(Card)`
  background-color: green;
  margin: 15px;
`;

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function BasicCard() {
    
  return (
    
    <Card sx={{ minWidth: 275 , minHeight: '550px'}}>
        <CardHeader title="Task to do" />
        <YellowCard>
             <CardContent>
             {/* Add your text here */}
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             </CardContent>
        </YellowCard>
    </Card>
  );
}
