import React from 'react';

import { Grid, Box } from '@material-ui/core'
import { FormRow } from '../InputComponents/Inputs';

function RequirementsForm(props: { formik: any }) {

    const { formik } = props
    return (<>
        <Box sx={{ m: 2 }}>
            <Grid container spacing={2}>
                <FormRow type="text" label='Data Compliance' 
                value={formik.values.datacompliance}
                onChange={formik.handleChange} name="datacompliance" required={true} />

                <FormRow type="text" label='Max Message Size' 
                 value={formik.values.maxmessagesize} onChange={formik.handleChange} name="maxmessagesize" required={true} />

                <FormRow type="text" label='No of Messages Per Sec'
                  value={formik.values.messagespersec} 
                  onChange={formik.handleChange} name="messagespersec" required={true} />

            </Grid>

            <Grid container spacing={2}>
                <FormRow type="text" label='Compression Type' 
                 value={formik.values.compressiontype} onChange={formik.handleChange} name="compressiontype" required={true} />

                <FormRow type="text" label='Sequence of Message Required' 
                 value={formik.values.sequenceofmessage} onChange={formik.handleChange} name="sequenceofmessage" required={true} />          

            </Grid>
        </Box>

    </>)
}

export default RequirementsForm;
