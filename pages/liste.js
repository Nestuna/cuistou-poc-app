import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/fruits`)
    const fruits = await res.json()

    const res2 = await fetch(`http://localhost:3000/api/legumes`)
    const legumes = await res2.json()

    const dateAjd = new Date().getMonth() + 1

    // Pass data to the page via props
    return {
        props: {
            laDate : dateAjd,
            lesFruits : fruits,
            lesLegumes : legumes
        },
    }
}

export default function Liste(props) {

    const date = props.laDate
    const fruits = props.lesFruits;
    const legumes = props.lesLegumes;

    // Fruits
    const getWinterFruits = fruits.filter(fruit => fruit.month.includes('January') || fruit.month.includes('February') || fruit.month.includes('December'));
    const getAutumnFruits = fruits.filter(fruit => fruit.month.includes('September') || fruit.month.includes('October') || fruit.month.includes('November'));
    const getSummerFruits = fruits.filter(fruit => fruit.month.includes('June') || fruit.month.includes('July') || fruit.month.includes('August'));
    const getSpringFruits = fruits.filter(fruit => fruit.month.includes('March') || fruit.month.includes('April') || fruit.month.includes('May'));
    // Veggies
    const getWinterVeggies = legumes.filter(legume => legume.month.includes('January') || legume.month.includes('February') || legume.month.includes('December'));
    const getAutumnVeggies = legumes.filter(legume => legume.month.includes('September') || legume.month.includes('October') || legume.month.includes('November'));
    const getSummerVeggies = legumes.filter(legume => legume.month.includes('June') || legume.month.includes('July') || legume.month.includes('August'));
    const getSpringVeggies = legumes.filter(legume => legume.month.includes('March') || legume.month.includes('April') || legume.month.includes('May'));

    // Months by seasons
    const winter = [12,1,2]
    const autumn = [9,10,11]
    const summer = [6,7,8]
    const spring = [3,4,5]

    if (date == winter[0] || date == winter[1] || date == winter[2]){
        var getSeasonFruits = getWinterFruits.sort((a,b) => a.name.localeCompare(b.name))
        var getSeasonVeggies = getWinterVeggies.sort((a,b) => a.name.localeCompare(b.name))
        var season = "winter"
    }
    else if (date == autumn[0] || date == autumn[1] || date == autumn[2]){
        var getSeasonFruits = getAutumnFruits.sort((a,b) => a.name.localeCompare(b.name))
        var getSeasonVeggies = getAutumnVeggies.sort((a,b) => a.name.localeCompare(b.name))
        var season = "autumn"
    }
    else if (date == summer[0] || date == summer[1] || date == summer[2]){
        var getSeasonFruits = getSummerFruits.sort((a,b) => a.name.localeCompare(b.name))
        var getSeasonVeggies = getSummerVeggies.sort((a,b) => a.name.localeCompare(b.name))
        var season = "summer"
    }
    else if (date == spring[0] || date == spring[1] || date == spring[2]){
        var getSeasonFruits = getSpringFruits.sort((a,b) => a.name.localeCompare(b.name))
        var getSeasonVeggies = getSpringVeggies.sort((a,b) => a.name.localeCompare(b.name))
        var season = "spring"
    }

    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'var(--background)' }} style={{ paddingLeft: 100, paddingRight: 100 }}>
            <h1 style={{ color: 'var(--text)', justifyContent: 'center', textAlign: 'center' }}>Fruits and vegetables by season</h1>
            <p style={{ color: 'var(--primary)', justifyContent: 'center', textAlign: 'center' }}>Right now it's {season} !</p>
            
            <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={4}>
                    <Chip label="Fruits" color="success" style={{ margin: 10 }} />
                    {getSeasonFruits.map(fruit =>

                    <div key={fruit._id}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'var(--foreground)' }} 
                        style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                            <ListItem>
                                <ListItemText sx={{ color: 'var(--text)' }} primary={fruit.name} />
                            </ListItem>
                        </List>
                    </div>)}
                </Grid>
                <Grid item xs={4}>
                <Chip label="Vegetables" color="success" style={{ margin: 10 }} />
                    {getSeasonVeggies.map(veggie =>
                    <div key={veggie._id}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'var(--foreground)' }}
                        style={{ padding: 0, borderBottom: '1px solid #ccc' }}>
                            <ListItem>
                                <ListItemText sx={{ color: 'var(--text)' }} primary={veggie.name} />
                            </ListItem>
                        </List>
                    </div>)}
                </Grid>
            </Grid>

        </Box>
    )
  }