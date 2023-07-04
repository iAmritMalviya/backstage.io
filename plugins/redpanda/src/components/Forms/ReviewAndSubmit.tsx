import React from 'react';
import { FormRow, CustomTable } from '../InputComponents/Inputs';
import { Grid, Box } from '@material-ui/core'



const data = {
    "appname": "asdfasdf",
    "eventtype": "asdfsadf",
    "subeventtype": "sdfasdfsa",
    "topicname": "asdfsadf",
    "teamemail": "asdfsadf",
    "teamisdgroup": "sadfsadfsa",
    "tier": "asdfasdf",
    "portfolio": "asdfsadf",
    "description": "asdfsadfsd",
    "datacompliance": "asdfsadfsdaf",
    "maxmessagesize": "asdfsadf",
    "messagespersec": "asdfsadfs",
    "compressiontype": "asdfsadfsdf",
    "sequenceofmessage": "asdfsadf",
    "platform": "option2",
    "region": "option3",
    "environment": "Dev",
    "cluster": "option3",
    "iscompacttopic": "option2",
    "replicationfactor": "option2",
    "retentionperiod": "option1",
    "partitions": "option2",
    "kafkausername": "asdfsdf",
    "isconsumersameasproducer": "",
    "consumerappname": "asdfsdfsdf",
    "consumerplatform": 2,
    "consumerregion": 4,
    "consumercluster": "",
    "mirror": "sadfsadfsdaf",
    "mirrordirection": "asdfasdf",
    "consumertier": "asdfasdfsadf",
    "consumerportfolio": "asdfasdfasdf",
    "consumerteamemail": "asdf",
    "consumerteamisdgroup": "asdfsadfsd",
    "consumergroupid": ""
}






function ReviewAndSubmitForm(props: { formik: any, headings: any }) {
    const { formik, headings } = props

    const TopicData =
    {
        'App Name': formik.values.appname,
        'Event Type': formik.values.eventtype,
        'Sub-Event Type': formik.values.subeventtype,
        'Topic Name': formik.values.topicname,
        'Team Email': formik.values.teamemail,
        'Team ISD Group': formik.values.teamisdgroup,
        'Tier': formik.values.tier,
        'Portfolio': formik.values.portfolio,
        'Description': formik.values.description,
    }

    const RequirementsData = {
        'Data Compliance': formik.values.datacompliance,
        'Max Message Size': formik.values.maxmessagesize,
        'No of Messages Per Sec': formik.values.messagespersec,
        'Compression Type': formik.values.compressiontype,
        'Sequence of Message Required': formik.values.sequenceofmessage
    }

    const ClusterConfigsData = {
        'Select Platform': formik.values.platform,
        'Select Region': formik.values.region,
        'Environment': formik.values.environment,
        'Select the Cluster': formik.values.cluster,
        'Is Compact Topic': formik.values.iscompacttopic,
        'Replication Factor': formik.values.replicationfactor,
        'Retention Period': formik.values.retentionperiod,
        'Partitions': formik.values.partitions
    };

    const ConsumerData = {        
        'Consumer App Name': formik.values.consumerappname,
        'Platform': formik.values.consumerplatform,
        'Region': formik.values.consumerregion,
        'Cluster': formik.values.consumercluster,
        'Mirror Required': formik.values.mirror,
        'Mirror Direction': formik.values.mirrordirection,
        'Tier': formik.values.consumertier,
        'Portfolio': formik.values.consumerportfolio,
        'Consumer Team Email': formik.values.consumerteamemail,
        'Consumer Team AD Group': formik.values.consumerteamisdgroup,
        'Consumer Group ID': formik.consumergroupid,
        'Kafka Username': formik.values.kafkausername
    };

    const ProducerData = {

        'Producer App Name': formik.values.appname,
        'Portifolio': formik.values.portfolio,
        'Tier': formik.values.tier,
        'Cluster': formik.values.cluster,
        'Producer Team Email': formik.values.teamemail,
        'Producer Team AD Group': formik.values.teamisdgroup,

    }



    return (<>
        <Box sx={{ m: 2 }}>
            <Grid container spacing={2}>
                <CustomTable heading={headings[0]} rows={TopicData} />

                <CustomTable heading={'Requirements Form'} rows={RequirementsData}/> 
                
                <CustomTable heading={'Cluster & Config Form'} rows={ClusterConfigsData}/>
            </Grid>

            <Grid container spacing={2}>
            <CustomTable heading={'Producer Form'} rows={ProducerData}/>  
            
            <CustomTable heading={'Consumer Form'} rows={ConsumerData}/> 
            </Grid>

            <Grid container spacing={2}>

            </Grid>

        </Box>

    </>)
}

export default ReviewAndSubmitForm;


