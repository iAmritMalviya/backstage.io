import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, FormControl, FormHelperText, TextareaAutosize, Box } from '@material-ui/core';
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

    function handleClick(event: any) {
        setShowForm(false);
        setShowSuccessMsg(true);
        console.log(event.target)

    }

    return (
        <>
            <Box id='box'>
                {showForm && (

                    <form action="/" method="post">
                        <Grid container direction='column' spacing={5}>
                            <Grid item>
                                <TextField id="outlined-basic" label="Application Name" variant="outlined" fullWidth />
                                <FormHelperText>Give the application name</FormHelperText>
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Use Cases"
                                    variant='outlined'
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                />
                                <FormHelperText>Brief description on why API is being consumed?</FormHelperText>
                            </Grid>

                            <Grid item>
                                <TextField id="outlined-basic" label="Application Name" variant="outlined" fullWidth />
                                <FormHelperText>Give the application name</FormHelperText>
                            </Grid>

                            <Grid item>
                                <Button type='button' id='subscribeBtn' onClick={handleClick} size='large'
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
                </div>)}

            </Box>
        </>
    )
}
