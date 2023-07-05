import React, { useState, SyntheticEvent } from "react"
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem, Table, TableContainer, TableRow, TableBody, TableCell, TableHead, Paper, Tabs, Tab } from "@material-ui/core"



export const FormRow = ({ type, label, value, onChange, name, required, disabled }: { type?: any, label?: any, value?: any, onChange?: any, name?: any, required?: boolean, disabled?: boolean }) => {
    return (
        <>
            <Grid item xs={4}>
                <TextField
                    type={type} fullWidth
                    variant='outlined'
                    label={label}
                    onChange={onChange}
                    value={value}
                    name={name}
                    required={required ? true : false}
                    disabled={disabled ? true : false}
                ></TextField>
            </Grid>
        </>
    )

}

export const SelectComp = ({ onChange, value, label, name, options, required, disabled }: { onChange?: any, value?: any, label?: any, name?: string, options?: any, required?: boolean, disabled?: boolean }) => {

    options = Array.isArray(options) ? options : [options];

    return (<>
        <Grid item xs={4}>
            <FormControl variant="outlined" fullWidth >
                <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    onChange={onChange}
                    value={value}
                    name={name}
                    required={required}
                    disabled={disabled ? true : false}
                >
                    {options.map((item: any) => <MenuItem value={item}>{item}</MenuItem>)}

                </Select>
            </FormControl>
        </Grid>
    </>)
}

export const CustomTable = ({ heading, rows }: { heading: string, rows: any }) => {
heading = heading.replace(/\b\w/g, function(word:string) {
    return word.toUpperCase()
});
// rows will be an object
    return (<>
        <Grid item xs={4}>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' colSpan={2}>{heading}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(rows).map(([key, value]) => (
                            <TableRow key={key}>
                                <TableCell>{key}</TableCell>
                                <TableCell>{value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </>)
}

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TabContext } from "@material-ui/lab"
import { MultiForm } from "../MultiForm"



const card = (
  <React.Fragment>
    <CardContent>
 
      <Typography align="center" variant="h5" component="div">
       Form is submitted successfully
      </Typography>     
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => window.location.href = '/redpanda'}>Creae A new Form</Button>
      
    </CardActions>
  </React.Fragment>
);

export function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export function TabComp() {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent<{}>, newValue: string) => {
        setValue(newValue)
    }
    return(
        <>
     <Tabs value={value} onChange={handleChange} aria-label="Tabs">
  <Tab value={1} label="Tab 1"  >
  
  </Tab>
  <Tab value={2} label="Tab 2" />
  <Tab value={3} label="Tab 3" />
</Tabs>
        </>
    )
}