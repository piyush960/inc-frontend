import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    step1: {
        title: "",
        domain: "",
        project_type: "",
        guide_name: "",
        guide_email: "",
        guide_phone: "",
        hod_email: "",
        is_sponsored: false,
        company: "",
        abstract: "",
        is_ndaSign: false,
        is_showDemo: true,
        no_demo_reason: "",
    },
    step2: {

    },
    step3: {

    },
    step4: {

    }
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submit_step1: (state) => {
      state.value += 1
    },
    submit_step2: (state) => {
			state.value += 1
    },
    submit_step3: (state) => {
			state.value += 1
    },
    submit_step4: (state) => {
			state.value += 1
    },
  },
})

export const { submit_step1, submit_step2, submit_step3, submit_step4 } = formSlice.actions

export default formSlice.reducer