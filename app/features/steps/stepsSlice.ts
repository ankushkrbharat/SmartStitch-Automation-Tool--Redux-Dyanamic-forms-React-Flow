import  type {PayloadAction } from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit'

type step={
    type:string;
    service:string;
    config:Record<string,string>;
}

interface StepsState{
    steps:step[];    
}

const initialState:StepsState={
    steps:[]
}

const stepsSlice=createSlice({
    name:'steps',
    initialState,
    reducers:{
        addStep:(state,action:PayloadAction<step>)=>{
            state.steps.push(action.payload);
        },
        clearSteps:(state)=>{
            state.steps=[]
        }
    }
})
export const { addStep,clearSteps } = stepsSlice.actions

export default stepsSlice.reducer