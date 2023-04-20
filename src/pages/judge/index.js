import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';
import ResultImpetus from "./resultImpetus";
import JudgeAllocation from './judgeAllocation';
import ResultConcepts from './resultConcept';

function Judge() {
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <Routes>
            <Route path='/impetus/evaluate/:jid/:pid' element={<ResultImpetus />} />
            <Route path='/:jid' element={
                <Suspense>
                    <JudgeAllocation />
                </Suspense>
            } />
            <Route path='/concepts/evaluate/:jid/:pid' element={<ResultConcepts />} />
        </Routes>
    );
}

export default Judge;