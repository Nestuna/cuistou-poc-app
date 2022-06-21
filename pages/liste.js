import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/fruits`)
    const fruits = await res.json()

    const res2 = await fetch(`http://localhost:3000/api/legumes`)
    const legumes = await res2.json()

    // Pass data to the page via props
    return {
        props: {
            lesFruits : fruits,
            lesLegumes : legumes
        },
    }
}

export default function Liste(props) {

    const fruits = props.lesFruits;
    const legumes = props.lesLegumes;

    const getWinterFruits = fruits.filter(fruit => fruit.month.includes('January') || fruit.month.includes('February') || fruit.month.includes('December'));
    const getAutumnFruits = fruits.filter(fruit => fruit.month.includes('September') || fruit.month.includes('October') || fruit.month.includes('November'));
    const getSummerFruits = fruits.filter(fruit => fruit.month.includes('June') || fruit.month.includes('July') || fruit.month.includes('August'));
    const getSpringFruits = fruits.filter(fruit => fruit.month.includes('March') || fruit.month.includes('April') || fruit.month.includes('May'));

    const getWinterVeggies = legumes.filter(legume => legume.month.includes('January') || legume.month.includes('February') || legume.month.includes('December'));
    const getAutumnVeggies = legumes.filter(legume => legume.month.includes('September') || legume.month.includes('October') || legume.month.includes('November'));
    const getSummerVeggies = legumes.filter(legume => legume.month.includes('June') || legume.month.includes('July') || legume.month.includes('August'));
    const getSpringVeggies = legumes.filter(legume => legume.month.includes('March') || legume.month.includes('April') || legume.month.includes('May'));

    return (
      <div style={{ paddingLeft: 100, paddingRight: 100 }}>
        <div>
            <h1 style={{ color: "#3f453f" }}>Fruits et légumes par saison</h1>

            <Chip label="Fruits" color="success" />

            <p>Hiver :</p>

            {getWinterFruits.map(fruit =>
            <div
                key={fruit._id}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText sx={{ color: "#659465" }} primary={fruit.name} />
                    </ListItem>
                </List>
            </div>)}

            <p>Automne :</p>

            {getAutumnFruits.map(fruit =>
            <div
                key={fruit._id}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText sx={{ color: "#659465" }} primary={fruit.name} />
                    </ListItem>
                </List>
            </div>)}

            <p>Eté :</p>

            {getSummerFruits.map(fruit =>
            <div
                key={fruit._id}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText sx={{ color: "#659465" }} primary={fruit.name} />
                    </ListItem>
                </List>
            </div>)}

            <p>Printemps :</p>

            {getSpringFruits.map(fruit =>
            <div
                key={fruit._id}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText sx={{ color: "#659465" }} primary={fruit.name} />
                    </ListItem>
                </List>
            </div>)}
            <br></br>
            <Chip label="Légumes" color="success" />
        {/* {legumes.map(legume =>
            <div
                key={legume._id}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText sx={{ color: "#659465" }} primary={legume.name} secondary={legume.month.map(month => month+" ")} />
                    </ListItem>
                </List>
            </div>)} */}

            <p>Hiver :</p>

            {getWinterVeggies.map(veggie =>
            <div
                key={veggie._id}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText sx={{ color: "#659465" }} primary={veggie.name} />
                    </ListItem>
                </List>
            </div>)}

            <p>Automne :</p>

            {getAutumnVeggies.map(veggie =>
            <div
                key={veggie._id}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText sx={{ color: "#659465" }} primary={veggie.name} />
                    </ListItem>
                </List>
            </div>)}

            <p>Eté :</p>

            {getSummerVeggies.map(veggie =>
            <div
                key={veggie._id}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText sx={{ color: "#659465" }} primary={veggie.name} />
                    </ListItem>
                </List>
            </div>)}

            <p>Printemps :</p>

            {getSpringVeggies.map(veggie =>
            <div
                key={veggie._id}
                style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText sx={{ color: "#659465" }} primary={veggie.name} />
                    </ListItem>
                </List>
            </div>)}

        </div>
      </div>
    )
  }