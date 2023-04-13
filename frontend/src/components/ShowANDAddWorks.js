import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { IconButton } from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "react-bootstrap";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
    button: {
        margin: theme.spacing(1),
    }
}))



const ShowANDAddWorks = () => {

    const classes = useStyles();

    const navigate = useNavigate();

    // выведем все works-ы
    const [works, setWorks] = useState([])

    const [inputFields, setInputFields] = useState([]);


    const getWorks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/work/') 
            // console.log(response.data)  
            setWorks(response.data)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getWorks();
    }, [])

    useEffect(() => {
        if (inputFields.length === 0) {
            addField();
        }
    }, [inputFields]);


    const addField = (name_work = '', release_dates = '', due_dates = '') => {
        const id = Date.now();
        const inputField = {id, name_work, release_dates, due_dates};
        setInputFields([...inputFields, inputField]);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);

        // filtering "inputFields" data on empty inputs
        const filteredFields = inputFields.filter(({name_work, release_dates, due_dates}) => {
            return !!(name_work.trim().length || release_dates.trim().length || due_dates.trim().length);
        })

        // if "filteredFields" is empty - don't send request to the server
        if (filteredFields.length === 0) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/work/', {...filteredFields});

            console.log('response', response.data);

            getWorks(); // fetch the new set of works

            setInputFields([]); // reset "inputFields"
            
        } catch (error) {
            console.log('Error', error.message);
        }
    };
    
    const handleChangeInput = (id, event) => {
        const copyOfInputFields = [...inputFields];

        const updatedField = copyOfInputFields.map((inputField) => {

            if (inputField.id === id) {
                inputField[event.target.name] = event.target.value;
            }

            return inputField;
        });

        setInputFields(updatedField);
    }

    const handleAddFields = () => {
        addField();
    }

    const handleRemoveFields = (id) => {
        if (inputFields.length > 1) {
            setInputFields(inputFields.filter((inputField) => inputField.id !== id));
        }
    }

    return (
        <Container> 
            <h1>Add Works</h1>

            {JSON.stringify(inputFields)}

            <form className={classes.root} onSubmit={handleSubmit}>
                {inputFields.map(({id, name_work, release_dates, due_dates}) => (
                    <div key={id}>
                        <TextField
                            placeholder="Enter name job"
                            name="name_work"
                            label="Name Job"
                            value={name_work}
                            onChange={event => handleChangeInput(id, event)}
                        />
                        <TextField
                            name="release_dates"
                            label="Release Dates"
                            value={release_dates}
                            onChange={event => handleChangeInput(id, event)}
                        />
                        <TextField
                            name="due_dates"
                            label="Due Dates"
                            value={due_dates}
                            onChange={event => handleChangeInput(id, event)}         
                        />                            
                        <IconButton
                            onClick={()=> handleRemoveFields(id)}
                        >
                            <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleAddFields}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                ))}
                <Button 
                    className={classes.button}
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    endIcon={<Icon>send</Icon>} 
                >
                        Add works
                </Button>
            </form>
            <h1>All Works</h1>
            <div className="card-info stages-card-info">
            {
                works.map(({id, name_work}) => (
                    <Card key={id} className="m=2 rounded shadow-lg" style={{ width: '18rem' }}>                    <Card.Body>
                        <Card.Title>{name_work}</Card.Title>
                        </Card.Body>
                    </Card>
                ))
            }
            </div>
        </Container>
    );
};

export default ShowANDAddWorks;