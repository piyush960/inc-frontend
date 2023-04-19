import bg from "../../assets/images/alBG.jpg";
import { useEffect, useState, react } from "react";
import { Buttons } from "../../components";
import axios from 'axios';
// const judgesData = [
//     {
//         event:"concepts",
//       id:1,
//       abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non elit tortor. Donec gravida malesuada justo eu porttitor. Sed at nunc sed orci euismod pharetra. Nulla convallis ultrices sapien, id feugiat ipsum consequat sed. Quisque at ipsum mi. In in felis a mauris vestibulum bibendum. Fusce non elit augue. Nullam aliquet enim a massa sollicitudin aliquet. Sed in purus leo. Praesent convallis vel dolor id eleifend. Donec ac ultricies libero. Aenean eleifend ante eget volutpat consequat.',
//       project_name: 'Project A',
//       domain_name: 'Domain X',
//       slot: 1,
//     },
//     {
//         event:"concepts",
//         id:2,
//       abstract: 'Nunc quis metus orci. Integer rhoncus, sapien sit amet eleifend pellentesque, nisi metus bibendum ipsum, nec pellentesque eros enim ac nibh. Morbi nec consectetur libero. Suspendisse vel mi lobortis, facilisis velit vitae, tincidunt justo. Vivamus auctor iaculis enim, vel efficitur orci consequat at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla nec semper felis. Ut et ex eu odio interdum pulvinar. Fusce vel diam non nisl ultrices bibendum quis a augue. Mauris molestie ante in mi accumsan, eu cursus lectus vestibulum. Fusce eleifend augue sit amet est bibendum, sed interdum neque hendrerit. Donec scelerisque fermentum aliquam.',
//       project_name: 'Project B',
//       domain_name: 'Domain Y',
//       slot: 2,
//     },
//     {
//         event:"impetus",
//         id:3,
//       abstract: 'Vivamus vitae ipsum sit amet nisl congue commodo. Integer nec sem lorem. Vestibulum sagittis lorem eu commodo molestie. Donec vel augue vel nulla eleifend tincidunt. Proin interdum sodales commodo. Praesent id congue nisi, eget ultricies tortor. In euismod varius magna, at facilisis sapien bibendum vitae. Etiam cursus justo quis dolor varius, quis consectetur mauris posuere. Nunc euismod enim quis purus convallis bibendum. Curabitur ultricies purus et sapien convallis, eu blandit mauris lacinia. Donec in risus magna. Nam porta nibh vel facilisis suscipit. Maecenas et nunc lectus. Duis pulvinar risus a felis vehicula, quis bibendum nunc auctor. Aliquam rutrum lorem non eros sodales, eget eleifend tellus ornare.',
//       project_name: 'Project C',
//       domain_name: 'Domain Z',
//       slot: 3,
//     }
//   ];
  
function JudgeAllocation() {
    const [judgesData, setJudgesData] = useState([]);

    useEffect(() => {
        async function fetchJudgesData() {
            const response = await axios.get(
                'https://restcountries.com/v2/all'
            );
            setJudgesData(response.data);
        }

        fetchJudgesData();
    }, []);

    return (
        <>
            
                <div className="py-8 flex flex-col items-center mx-5">
                    {judgesData.map((judge) => (
                        <div key={judge.id} className="rounded-lg outline-dashed outline-2 outline-offset-[3px] my-2 outline-light_blue px-4 py-2 bg-faint_blue/10 mb-3 w-[90%] md:w-[80%]">
                            <h1 className="font-bold text-2xl  text-gold">{judge.event}</h1>
                            <div className="flex "><h1 className="text-xl font-bold text-gold"> ID&nbsp;:&nbsp; </h1> <h2 className="text-lg font-normal">{judge.id}</h2></div>
                           <div className="flex "><h1 className="text-xl font-bold text-gold">Project Name&nbsp;:&nbsp; </h1> <h2 className="text-lg font-normal">{judge.project_name}</h2></div>
                           <div className="flex"><h1 className="text-xl font-bold text-gold">Slot&nbsp;: &nbsp;</h1> <h2 className="text-lg font-normal">{judge.slot}</h2></div>
                           <div className="flex"><h1 className="text-xl font-bold text-gold">Project Domain&nbsp;:&nbsp; </h1> <h2 className="text-lg font-normal">{judge.domain_name}</h2></div>
                           <div className="md:flex"><h1 className="text-xl font-bold text-gold">Abstract&nbsp;:&nbsp; </h1> <h2 className="text-lg font-normal">{judge.abstract}</h2></div>
                           <Buttons onclick={"/result-concepts"} value="Result"/>
                        </div>
                    ))}
                </div>
            
        </>
    );
}
export default JudgeAllocation;