import React from 'react';
import { FormRow } from '../InputComponents/Inputs';

import { Grid, Box } from '@material-ui/core'
function TopicForm(props: { formik: any }) {

    const { formik } = props
    return (<>
        <Box sx={{ m: 2 }}>
            <Grid container spacing={2}>
                <FormRow type="text" label='App Name' 
                value={formik.values.appname}
                onChange={formik.handleChange} name="appname" required={true} />

                <FormRow type="text" label='Event Type' 
                 value={formik.values.eventtype} onChange={formik.handleChange} name="eventtype" required={false} />

                <FormRow type="text" label='Sub-Event Type'
                  value={formik.values.subeventtype} 
                  onChange={formik.handleChange} name="subeventtype" required={false} />

            </Grid>

            <Grid container spacing={2}>
                <FormRow type="text" label='Topic Name' 
                 value={formik.values.topicname} onChange={formik.handleChange} name="topicname" required={true} />

                <FormRow type="text" label='Team Email' 
                 value={formik.values.teamemail} onChange={formik.handleChange} name="teamemail" required={true} />

                <FormRow type="text" label='Team ISD Group'
                value={formik.values.teamisdgroup}
                onChange={formik.handleChange} name="teamisdgroup" required={true} />

            </Grid>

            <Grid container spacing={2}>
                <FormRow type="text" label='Tier' 
                 value={formik.values.tier} onChange={formik.handleChange} name="tier" required={true} />

                <FormRow type="text" label='Portfolio' 
                 value={formik.values.portfolio} onChange={formik.handleChange} name="portfolio" required={true} />

                <FormRow type="text" label='Description' 
                 value={formik.values.description} onChange={formik.handleChange} name="description" required={false} />
                
            </Grid>

        </Box>

    </>)
}

export default TopicForm;
