import React from 'react';

import { Grid, Box, Checkbox, Typography, FormControlLabel, TextField } from '@material-ui/core'
import { FormRow, SelectComp } from '../InputComponents/Inputs';

function ProducerAndConsumerForm(props: { formik: any }) {

    const options = [1, 2, 3, 4]

    const { formik } = props
    return (<>
        <Box sx={{ m: 2 }}>
            <Box sx={{ marginBottom: "2rem" }}>


                <Typography variant='h4'>Producer</Typography>

                <Grid container spacing={2}>
                    <FormRow type="text" label='Producer App Name'
                        value={formik.values.appname}
                        disabled />

                    <FormRow type="text" label='Topic Name'
                        value={formik.values.topicname} disabled />

                    <FormRow type="text" label='Tier'
                        value={formik.values.tier}
                        disabled />
                </Grid>

                <Grid container spacing={2}>
                    <FormRow type="text" label='Portfolio'
                        value={formik.values.portfolio} disabled />

                    <FormRow type="text" label='Cluster Info'
                        value={formik.values.cluster} disabled />

                    <FormRow type="text" label='Kafka Username'
                        value={formik.values.kafkausername} onChange={formik.handleChange} name="kafkausername" required />
                </Grid>
            </Box>

            <Box>
                <Typography variant='h4' >Consumer</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={state.checkedB}
                                value={formik.values.isconsumersameasproducer}
                                onChange={formik.handleChange}
                                name="isconsumersameasproducer"
                                color="primary"
                            />
                        }
                        label="Is Consumer Same As Producer"
                    />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>

                    <FormRow type="text" label='Consumer App Name'
                        value={formik.values.consumerappname} onChange={formik.handleChange} name="consumerappname" required />

                    <SelectComp label='Select Platform'
                        value={formik.values.consumerplatform} onChange={formik.handleChange}
                        options={options}
                        name="consumerplatform" required />

                    <SelectComp label='Select Region'
                        value={formik.values.consumerregion} onChange={formik.handleChange}
                        options={options}
                        name="consumerregion" required />

                </Grid>

                <Grid container spacing={2}>
                    <FormRow type='text' label='Mirror Required'
                        onChange={formik.handleChange}
                        value={formik.values.mirror}
                        name='mirror'
                    />

                    <FormRow type='text' label='Mirror Direction'
                        onChange={formik.handleChange}
                        value={formik.values.mirrordirection}
                        name='mirrordirection'
                    />

                    <FormRow type='text' label='Tier'
                        onChange={formik.handleChange}
                        value={formik.values.consumertier}
                        name='consumertier'
                        required />
                </Grid>

                <Grid container spacing={2}>
                    <FormRow type='text' label='Portfolio'
                        onChange={formik.handleChange}
                        value={formik.values.consumerportfolio}
                        name='consumerportfolio'
                        required />

                    <FormRow type='text' label='Consumer Team Email'
                        onChange={formik.handleChange}
                        value={formik.values.consumerteamemail}
                        name='consumerteamemail'
                        required
                    />

                    <FormRow type='text' label='Consumer Team ISD Group'
                        onChange={formik.handleChange}
                        value={formik.values.consumerteamisdgroup}
                        name='consumerteamisdgroup'
                        required />
                </Grid>

                <Grid container spacing={2}>
                    <FormRow type='text' label='Consumer Group ID'
                        value={formik.values.consumerportfolio}
                        disabled />
                </Grid>

            </Box>
        </Box>

    </>)
}

export default ProducerAndConsumerForm;
