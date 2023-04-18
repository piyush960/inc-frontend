import { Suspense, lazy, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormsBanner, RadioButtons } from '../../../components';

const JudgeToProjects = lazy(() => import('./judgeToProjects'));
const ProjectToJudges = lazy(() => import('./projectToJudges'));

function Allocations() {
  const [method, setMethod] = useState('judge_to_projects')
  const { event_name } = useParams()

  const options = [
    {
      label: 'Judge to Projects',
      value: 'judge_to_projects',
    },
    {
      label: 'Project to Judges',
      value: 'project_to_judges',
    }
  ]

  return (
    <>
      <FormsBanner eventName='Allocations' eventDescription={`${'Allocate ' + method === 'judge_to_projects' ? 'Judges to Projects' : 'Projects to Judges'}`} />
      <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border border-light_blue md:mx-20 mx-5 my-6'>
        <RadioButtons
          name='method'
          label='Select Method'
          options={options}
          state={method}
          setState={setMethod}
        />
      </div>
      {event_name && method(
        <Suspense fallback={<h1>Loading...</h1>}>
          {method === 'judge_to_projects' ? <JudgeToProjects event={event_name} /> : <ProjectToJudges event={event_name} />}
        </Suspense>
      )}
    </>
  )
}

export default Allocations;