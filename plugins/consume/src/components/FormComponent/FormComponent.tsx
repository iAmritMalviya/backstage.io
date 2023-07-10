import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, FormControl, FormHelperText, TextareaAutosize, Box, Link } from '@material-ui/core';
import {
    InfoCard,
    Header,
    Page,
    Content,
    ContentHeader,
    HeaderLabel,
    SupportButton,
} from '@backstage/core-components';





export const FormComponent = () => {

    const [showForm, setShowForm] = useState(true);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [showLink, setShowLink] = useState('')
    function handleClick(event: any) {
        // setShowForm(false);
        // setShowSuccessMsg(true);
        // console.log(event.target)

    }

    function handleForm(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const applicationName = formData.get('applicationName');
        const useCase = formData.get('useCase');
        const tps = formData.get('tps');

      
        fetch('http://localhost:7007/api/consume/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            applicationName,
            useCase,
            tps
          }),
        })
          .then((response) => response.json())
          .then((data) => {
          
            setShowForm(false);
        setShowSuccessMsg(true);
        setShowLink(data.link);
            // Handle the response data as needed
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle the error
          });
      }
      

    return (
        <>
            <Box id='box'>
                {showForm && (

                    <form action="/" method="post" onSubmit={handleForm}>
                        <Grid container direction='column' spacing={5}>
                            <Grid item>
                                <TextField id="outlined-basic" label="Application Name" variant="outlined" fullWidth name='applicationName' />
                                <FormHelperText>Give the application name</FormHelperText>
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Use Cases"
                                    variant='outlined'
                                    multiline
                                    maxRows={4}
                                    name='useCase'
                                    fullWidth
                                />
                                <FormHelperText>Brief description on why API is being consumed?</FormHelperText>
                            </Grid>

                            <Grid item>
                                <TextField id="outlined-basic" label="TPS" variant="outlined" name='tps' fullWidth />
                                <FormHelperText>TPS Generated?</FormHelperText>
                            </Grid>

                            <Grid item>
                                <Button type='submit' id='subscribeBtn' onClick={handleClick} size='large'
                                    fullWidth
                                    variant='contained'>Subscribe API</Button>
                            </Grid>

                        </Grid>
                    </form>
                )}

                {showSuccessMsg && (<div>
                    <Typography variant="h5" align="center">
                        API have been Subscribed! 
                    </Typography> 
                    <Link href={showLink} target='blank' align="center">
                       Link to the github
                    </Link>
                </div>)}

            </Box>
        </>
    )
}
