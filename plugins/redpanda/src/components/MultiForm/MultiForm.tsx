import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Stepper, Box, StepLabel, Step, Button, Typography } from '@mui/material'
import TopicForm from '../Forms/TopicForm';
import RequirementsForm from '../Forms/RequirementsForm';
import ClusterAndConfigsForm from '../Forms/ClusterAndConfigsForm';
import ProducerAndConsumerForm from '../Forms/ProducerAndConsumerForm';
import ReviewAndSubmitForm from '../Forms/ReviewAndSubmit'
const steps = ['Topic Form', 'Requirements Form', 'Cluster & Configs Form', 'Producer & Consumer Form', 'Review & Submit'];
console.log('Stepper', Stepper)
export const MultiForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const handleReset = () => {
    setActiveStep(0);
  }

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
      alert(JSON.stringify(values, null, 2));
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
      <Box sx={{ width: '100%', p: '3rem', border: '1px soldi white',
    backgroundColor: 'midnightblue', }}>
        <Button variant='outlined' sx={{marginBottom:'3rem'}}>Back to Home</Button>
        <Stepper activeStep={activeStep} sx={{marginBottom: '3rem'}}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            console.log('stepProps', stepProps)
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

            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

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

