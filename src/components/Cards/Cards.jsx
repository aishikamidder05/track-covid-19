import React from 'react';
import {Card, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';



const Cards =({
    data:
    { confirmed,
     recovered,
      deaths, 
      lastUpdate}} 
      ) => {

    if(!confirmed) {
     return 'Loading...';
    }


    return(
        <div className={styles.container}>
            
            <Grid container spacing={3} justify="center">
             <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
             <CardMedia
          component="img"
          alt="Infected"
          height="140"
          image = "https://image.freepik.com/free-vector/person-with-cold-concept_23-2148505010.jpg"
          title="Infected"
        />
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Infected</Typography>
                     <Typography variant ="h5">
                         <CountUp start={0}
                         end={confirmed.value}
                         duration={3}
                         separator=","/>
                     </Typography>
                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> 
                     <Typography variant ="body2">Number of active cases of Covid-19</Typography>
                 </CardContent>

             </Grid>

             <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.recovered)}>
             <CardMedia
          component="img"
          alt="Recovered"
          height="140"
          image="https://image.freepik.com/free-vector/hospital-doctors-patient-flat-poster_1284-18477.jpg"
          title="Recovered"
        />
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                     <Typography variant ="h5">
                         <CountUp start={0}
                         end={recovered.value}
                         duration={3}
                         separator=","/>
                     </Typography>
                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> 
                     <Typography variant ="body2">Number of recovered cases of Covid-19</Typography>
                 </CardContent>

             </Grid>
              <Grid item component={Card}  xs={12} md={3}  className={cx(styles.card, styles.deaths)}>
              <CardMedia
          component="img"
          alt="Deaths"
          height="140"
          image="https://image.freepik.com/free-vector/funera_23-2148034012.jpg"
          title="Deaths"
        />
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                     <Typography variant ="h5">
                         <CountUp start={0}
                         end={deaths.value}
                         duration={3}
                         separator=","/>
                     </Typography>
                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> 
                     <Typography variant ="body2">Number of deaths due to Covid-19</Typography>
                 </CardContent>

             </Grid>
            </Grid>

        </div>
    );
};

export default Cards;