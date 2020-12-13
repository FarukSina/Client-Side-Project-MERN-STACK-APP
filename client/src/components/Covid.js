/*
Principal author: Faruk Sina Kaya
*/
import React, {useState, useEffect} from 'react'
import Axios from "axios";
import { Container, Table } from 'react-bootstrap';
import classes from "../layout/covid.module.css"
import { Form } from 'react-bootstrap';
export default function Game() {
    const [covidResults, setCovidResults] = useState([]);
    const [globalResults, setGlobalResults] = useState([]);
    const [filteredCovids, setFilteredCovids] = useState(null);

    const onChange = e => {
        const {value} = e.target;
        handleSearchCountry(value);
    }

    const handleSearchCountry = searchText => {
        setFilteredCovids(covidResults.filter(covid => covid.Country.toLowerCase()
        .includes(searchText)))
    }
    useEffect(() => {
        Axios.get("https://api.covid19api.com/summary").then(({data}) => {
            setCovidResults(data.Countries)
            setGlobalResults(data.Global)
        })
        .catch(error => {
            console.error(error.message)
        })
    }, [])
    console.log(covidResults);
    console.log(globalResults);
     /**
        Author: Faruk
        @slice.map -> I have used my covidResults data upto size 50 member
       */
    return (
        covidResults? (
            <Container className={`${classes.container} my-3`}>
            <h1>Covid Results</h1>
            <p><strong>Table shows the countries and necessary fields</strong></p>
            <p><strong>Number of listed Countries : {covidResults.slice(0,50).length + " Countries"}</strong></p>
            <p><strong>Total Recovered Covid Patients : {(globalResults.TotalRecovered / 1000000).toFixed(1) + " Million People"}</strong></p>
            <p><strong>Total Confirmed Covid Patients : {(globalResults.TotalConfirmed/1000000).toFixed(1) + " Million People"}</strong></p>
            <div className={classes.searchText}>
            <Form.Label>Search</Form.Label>
            <Form.Control onChange = {onChange} type="text" placeholder="Search Country" />
            </div>
        <Table className={classes.table} striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Country</th>
      <th>CountryCode</th>
      <th>Date</th>
      <th>NewDeaths</th>
      <th>NewConfirmed</th>
      <th>NewRecovered</th>
    </tr>
  </thead>
  <tbody>
  {(filteredCovids || covidResults).slice(0,50).map((covid,i)=>(
        <tr key={i}>
            <td>{i}</td>
            <td>{covid.Country}</td>
            <td>{covid.CountryCode}</td>
            <td>{covid.Date.substring(0,10)}</td>
            <td>{covid.NewDeaths}</td>
            <td>{covid.NewConfirmed}</td>
            <td>{covid.NewRecovered}</td>
        </tr>
      ))}
  </tbody>
</Table>
</Container>
        )
     : null
    )
}