import React, { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";
import styled from "styled-components";
import Days from "./Days";
import DayHabitsRequest from "./Services/DayHabitsRequest";

export default function HabitBoxList() {

    const [habits, setHabits] = useState([]);
    useEffect(() => {
        DayHabitsRequest()
            .catch((res) => {
                console.log(res);
            })
            .then((res) => {
                setHabits(res.data);
                console.log(res.data);
            })

    }, [])


    return (
        <><><div className="padding"></div></>
            <Container>
                {(habits.length === 0) ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> :
                    habits.map((habitos, index) => <><Title>
                       <> <p>{habitos.name}</p> <ion-icon name="trash-outline"></ion-icon> </>
                    </Title>
                        <Days /></>)

                }
                
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 7px 10px 7px 13px;
    background-color: #E5E5E5;
    border-radius: 5px;

    p{
        color: #666666;
        font-size: 20px;
        background-color: white;
    }

    
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:20px;
    background-color: white;

`