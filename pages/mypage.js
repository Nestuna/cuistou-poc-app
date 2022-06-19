import { fruits } from "../fruits";
import { legumes } from "../legumes";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export async function getStaticProps() {
    return {
        props: {
            lesFruits : fruits,
            lesLegumes : legumes
        },
    }
}

export default function Mypage(props) {
    const fruits = props.lesFruits;
    const legumes = props.lesLegumes;
    return (
      <div style={{ paddingLeft: 350, paddingRight: 350 }}>
        <div>
            <h1>Fruits</h1>
          {fruits.map(fruit =>
            <div
                key={fruit.name}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText primary={fruit.name} secondary={fruit.month} />
                    </ListItem>
                </List>
            </div>)}
            <h1>Légumes</h1>
          {legumes.map(legume =>
            <div
                key={legume.name}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText primary={legume.name} secondary={legume.month.map(month => month+" ")} />
                    </ListItem>
                </List>
            </div>)}
        </div>
      </div>
    )
  }