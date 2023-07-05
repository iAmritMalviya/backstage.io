import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel
} from '@backstage/core-components';
import { TabComp } from '../InputComponents/Inputs';



export const Dashboard = () => (


  <Page themeId="tool">
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
          <TabComp />
                 {/* <MultiForm />    */}
        </Grid>
      </Grid>
    </Content>
  </Page>
);
