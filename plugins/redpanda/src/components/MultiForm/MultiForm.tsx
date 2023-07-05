import React, { useState } from 'react';
// import {useNavigate} from @backstage/
import { useFormik } from 'formik';
import { Stepper, Box, StepLabel, Step, Button, Typography } from '@mui/material'
import TopicForm from '../Forms/TopicForm';
import RequirementsForm from '../Forms/RequirementsForm';
import ClusterAndConfigsForm from '../Forms/ClusterAndConfigsForm';
import ProducerAndConsumerForm from '../Forms/ProducerAndConsumerForm';
import ReviewAndSubmitForm from '../Forms/ReviewAndSubmit'
import { OutlinedCard } from '../InputComponents/Inputs';
const steps = ['Topic Form', 'Requirements Form', 'Cluster & Configs Form', 'Producer & Consumer Form', 'Review & Submit'];
import { Page, Header, HeaderLabel } from '@backstage/core-components';
export const MultiForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibility, setVisibility] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }


  const handleReset = () => {
    setActiveStep(0);
  }
 

  const navigateToRedPanda = () => {
    window.location.href = '/redpanda';
  };



  const formik = useFormik({
    initialValues: {
        // topic form
        appname: '',
        eventtype: '',
        subeventtype: '', 
        topicname: '',
        teamemail: '',
        teamisdgroup: '',
        tier: '',
        portfolio: '',
        description: '',  
        // requirement form
        datacompliance: '',
        maxmessagesize: '',
        messagespersec: '',
        compressiontype: '',
        sequenceofmessage: '',

        // cluster & configs form
        platform: '',
        region: '',
        environment: '',
        cluster: '',
        iscompacttopic: '',
        replicationfactor: '',
        retentionperiod: '',
        partitions: '',

        // Producer & consumer form
        kafkausername: '',
        isconsumersameasproducer: '',
        consumerappname: '',
        consumerplatform: '',
        consumerregion: '',
        consumercluster: '',
        mirror: '',
        mirrordirection: '',
        consumertier: '',
        consumerportfolio: '',
        consumerteamemail: '',
        consumerteamisdgroup: '',
        consumergroupid: '',        
    },
    onSubmit: (values) => {
      // if(confirm('Are you sure?'))
      // window.location.href = '/redpanda'
      // alert(JSON.stringify(values, null, 2));
      console.log(values)
      setVisibility(true);
    },
  });

  function FormContent(activeStep: any) {
    switch (activeStep) {
      case 0:
        return <TopicForm formik={formik} />
        break;
      case 1:
        return <RequirementsForm formik={formik} />
      case 2: 
        return <ClusterAndConfigsForm formik={formik}/>
      case 3:
        return <ProducerAndConsumerForm formik={formik} /> 
      case 4: 
        return <ReviewAndSubmitForm formik={formik} headings={steps}/>
      default:
        return <div>404: not found</div>
        break;
    }
  }

  return (
    <>
    <Header title="Welcome to redpanda!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
      <Box sx={{ width: '100%', p: '3rem', border: '1px soldi white',
    }}>
      {/* <Link component='button' variant="outlined" >Back</Link> */}
        <Button variant='outlined' sx={{marginBottom:'3rem'}} onClick={() => navigateToRedPanda()}>Back to Home</Button>
        <Stepper activeStep={activeStep} sx={{marginBottom: '3rem'}}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

          <Box sx={{width: '40%', margin: '0 auto', zIndex: '1000',
          position: 'fixed',
          left: '40%',
          transition: '0.3s all ease',
          visibility: visibility  ? 'visible' : 'hidden',
          top: '30%'}}>
           <OutlinedCard />
          </Box>

        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Your Form is submitted successfully
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Back to new</Button>
            </Box>
          </>
        ) : (
          <>
            <form onSubmit={formik.handleSubmit}>
              {FormContent(activeStep)}
            </form>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
 

              <Button onClick={() => { activeStep === steps.length - 1 ? formik.handleSubmit() : handleNext() }}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Box>     
      
    </>
  );
};



{/* <Page themeId="tool">
    <Header title="Welcome to redpanda!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plugin title">
        <Button variant='contained' color='primary' onClick={() => window.location.href='/multiform'}>Create</Button>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Information card">
            <Typography variant="body1">
              All content should be wrapped in a card like this.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          Table will come here
                 {/* <MultiForm />    */}
  //       </Grid>
  //     </Grid>
  //   </Content>
  // </Page> */}