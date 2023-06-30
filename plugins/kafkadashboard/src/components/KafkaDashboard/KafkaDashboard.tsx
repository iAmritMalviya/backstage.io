/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { Header, Page, Content, Table } from '@backstage/core-components';
import { fetchApiRef, useApi } from '@backstage/core-plugin-api';

const brokersTableColumns = [
  {
    title: 'Broker ID',
    field: 'brokerId',
    render: (row: any) => {
      return <>Broker #{row.brokerId ?? ''}</>;
    },
  },
];

const topicsTableColumns = [
  {
    title: 'Name',
    field: 'topicName',
    render: (row: any) => {
      return <>{row.topicName ?? ''}</>;
    },
  },
  {
    title: 'Partitions',
    field: 'partitionCount',
    render: (row: any) => {
      return <>{row.partitionCount ?? ''}</>;
    },
  },
  {
    title: 'Replicas',
    field: 'replicationFactor',
    render: (row: any) => {
      return <>{row.replicationFactor ?? ''}</>;
    },
  },
  {
    title: 'Size',
    field: 'logDirSummary.totalSizeBytes',
    render: (row: any) => {
      return <>{row.logDirSummary.totalSizeBytes ?? ''}</>;
    },
  },
  {
    title: 'Action',
    field: 'action',
    render: row => {
      return (
        <Button
          color="primary"
          variant="contained"
          onClick={() => row.getMessages(row.topicName, row.partitionCount)}
        >
          Get Messages
        </Button>
      );
    },
  },
];

export const KafkaDashboard = () => {
  const [brokers, setBrokers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isDisplayMessages, setIsDisplayMessages] = useState(false);
  const [isCreateTopicModalOpen, setIsCreateTopicModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const { fetch } = useApi(fetchApiRef);

  const getMessages = async (topic_name: any, partition_id: any) => {
    const offset = '0';
    const timeout = '-1';
    const max_bytes = '50';
    const url = `http://redpanda-console.majeti.com:8082/topics/${topic_name}/partitions/-1/records?offset=${offset}&timeout=${timeout}&max_bytes=${max_bytes}`;
    const response = await fetch(url);
    const data = await response.json();
    setTopics(data.topics);
  };

  const getTopics = async () => {
    const response = await fetch(
      'http://redpanda-console.majeti.com:8080/api/topics',
    );
    const data = await response.json();
    setTopics(
      data.topics.map((t: any) => {
        return {
          ...t,
          getMessages,
        };
      }),
    );
  };

  const createTopic = useCallback(async () => {
    const {
      topicName = 'Test2',
      partitionCount = 1,
      replicationFactor = 1,
    } = formData;
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/http://redpanda-console.majeti.com:8080/api/topics',
      {
        method: 'POST',
        body: JSON.stringify({
          topicName,
          partitionCount: Number(partitionCount),
          replicationFactor: Number(replicationFactor),
          configs: [{ name: 'cleanup.policy', value: 'delete' }],
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      },
    );
    await response.json();
    getTopics();
    setIsCreateTopicModalOpen(false);
  }, [formData]);

  // useEffect(() => {
  //   const getBrokers = async () => {
  //     const response = await fetch(
  //       'http://redpanda-console.majeti.com:8082/brokers',
  //     );
  //     const data = await response.json();
  //     setBrokers(
  //       data.brokers.map((d: any) => ({
  //         brokerId: d,
  //       })),
  //     );
  //   };
  //   getBrokers();
  //   getTopics();
  // }, []);

  useEffect(() => {
    const getBrokers = async () => {
      const response = await fetch(
        'http://redpanda-console.majeti.com:8082/brokers',
        {
          headers: {
            'Content-Type': 'application/json',
            'Origin': '*', // Specify the origin of the frontend
          },
        }
      );
      const data = await response.json();
      setBrokers(
        data.brokers.map((d: any) => ({
          brokerId: d,
        }))
      );
    };
  
    getBrokers();
  }, []);
  

  const handleFormInputChange = (e: any, fieldName: any) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <Page themeId="tool">
      <Header title="Redpanda Dashboard" />
      <Content>
        <Button
          onClick={() => setIsCreateTopicModalOpen(true)}
          color="primary"
          variant="contained"
          style={{ marginBottom: '1rem' }}
        >
          Create Topic
        </Button>
        <Grid container direction="row" spacing={3}>
          {isDisplayMessages && (
            <Button variant="text">{'< Back to topics'}</Button>
          )}
          <Grid item md={4}>
            <Table
              columns={brokersTableColumns}
              data={brokers}
              title={
                <Box display="flex" alignItems="center">
                  <Typography variant="h6">List of brokers</Typography>
                </Box>
              }
            />
          </Grid>
          <Grid item md={8}>
            <Table
              columns={topicsTableColumns}
              data={topics}
              title={
                <Box display="flex" alignItems="center">
                  <Typography variant="h6">List of topics</Typography>
                </Box>
              }
            />
          </Grid>
        </Grid>
        <Dialog
          onClose={() => setIsCreateTopicModalOpen(prev => !prev)}
          aria-labelledby="search-modal-title"
          fullWidth
          maxWidth="sm"
          open={isCreateTopicModalOpen}
        >
          {isCreateTopicModalOpen && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
              }}
            >
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Create Topic
              </div>
              <FormControl>
                <TextField
                  label="Topic Name"
                  margin="normal"
                  onChange={e => handleFormInputChange(e, 'topicName')}
                />
              </FormControl>
              <FormControl>
                <TextField
                  label="Partition"
                  margin="normal"
                  autoComplete="off"
                  onChange={e => handleFormInputChange(e, 'partitionCount')}
                />
              </FormControl>
              <FormControl>
                <TextField
                  label="Replica"
                  margin="normal"
                  autoComplete="off"
                  onChange={e => handleFormInputChange(e, 'replicationFactor')}
                />
              </FormControl>
              <Button
                color="primary"
                variant="outlined"
                style={{ marginTop: '1rem', maxWidth: '200px' }}
                onClick={createTopic}
              >
                Create
              </Button>
            </div>
          )}
        </Dialog>
      </Content>
    </Page>
  );
};
