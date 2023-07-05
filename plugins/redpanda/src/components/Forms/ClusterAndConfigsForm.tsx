import React from 'react';

import { TextField, Grid, Box, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import { SelectComp } from '../InputComponents/Inputs';



function ClusterAndConfigsForm(props: { formik: any }) {

    const options = ['option1', 'option2', 'option3']

    const { formik } = props
    console.log('formik.values.region', formik.values.region)
    return (<>
        <Box sx={{ m: 2 }}>
            <Grid container spacing={2}>

                <SelectComp onChange={formik.handleChange} value={formik.values.platform} name='platform' options={options}
                    label="Select Platform" required={true} />

                <SelectComp onChange={formik.handleChange} value={formik.values.region} name='region' options={options}
                    label="Select Region" required={true} />


                <SelectComp onChange={formik.handleChange} value={formik.values.environment} name='environment' options={'Dev'}
                    label="Environment" required={true} />
            </Grid>

            <Grid container spacing={2}>

                <SelectComp onChange={formik.handleChange} value={formik.values.cluster} name='cluster' options={options}
                    label="Select the Cluser" required={true} />

                <SelectComp onChange={formik.handleChange} value={formik.values.iscompacttopic} name='iscompacttopic' options={options}
                    label="Is Compact Topic" required={true} />

                <SelectComp onChange={formik.handleChange} value={formik.values.replicationfactor} name='replicationfactor' options={options}
                    label="Replication Factor" required={true} />

            </Grid>

            <Grid container spacing={2}>


                <SelectComp onChange={formik.handleChange} value={formik.values.retentionperiod} name='retentionperiod' options={options}
                    label="Retention Period" required={true} />

                <SelectComp onChange={formik.handleChange} value={formik.values.partitions} name='partitions' options={options}
                    label="Partitions" required={true} />

            </Grid>
        </Box>

    </>)
}

export default ClusterAndConfigsForm;
