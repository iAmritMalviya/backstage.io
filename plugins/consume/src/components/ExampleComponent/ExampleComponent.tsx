import React from 'react';
import { Typography, Grid, FormControl } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
  
} from '@backstage/core-components';
import { FormComponent } from '../FormComponent';


export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to Intverse!">
      <HeaderLabel label="Owner" value="Team Alpha" />
      <HeaderLabel label="Lifecycle" value="Experimental" />
    </Header>
    <Content>
      <ContentHeader title="Consume API plugin">
        <SupportButton>Experimental plugin</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Subscribe">
            <Typography variant="body1">
              Once after subscription, consumer will get API keys via email with their DL
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <FormControl fullWidth>
          <FormComponent />
          </FormControl>
        </Grid>
      </Grid>
    </Content>
  </Page>
);
