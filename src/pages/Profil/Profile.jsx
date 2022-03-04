import React,{useEffect,useState} from 'react';
import "./Profile.css"
import { getUserData } from '../../API/Data/API-call/API-call';
import { useParams } from 'react-router-dom';
import BarChartGraph from '../../Components/Recharts/barchartgraph/barchartgraph';
import Linechartgraph from '../../Components/Recharts/linechartgraph/linechartgraph';
import Radarchartgraph from '../../Components/Recharts/radarchartgraph/radarchartgraph';
import Radialbarchartgraph from '../../Components/Recharts/radialbarchartgraph/radialbarchartgraph';
import List from '../../Components/List/List';



const Profile = ()=>{

    const [userInfos, setUserInfos] = useState({});
    const [todayScore, setTodayScore] = useState();
    const [keyData, setKeyData] = useState({});
    const [userActivity, setUserActivity] = useState([]);
    const [userAverageSessions, setUserAverageSessions] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);


    const { id } = useParams();

    useEffect(() => {
        /**
         * @async
         * @returns{Response}
         * 
         */
       
        async function getProfilePageAllData() {
            try {

                /**
                 * @constant  userInfos
                 * @property {string} firstName / userInfos
                 * @property {string} lastName / userInfos
                 * @property {number} age / userInfo 
                 * 
                 * @property {number} calorieCount / keyData
                 * @property {number} proteinCount / keyData
                 * @property {number} carboHydrateCount / keyData
                 * @property {number} lipidCount / keyData
                 * 
                 * @property {number} todayScore / todayScore
                 * @property {number} score / todayScore
                 * 
                 * 
                 */

                
                
                const userInfos = await getUserData(id, '');
                setUserInfos(userInfos.data.data.userInfos);
                setKeyData(userInfos.data.data.keyData);

                //Error in Backend, different name for the same property
                // todayscore for user12 / score for user18

                setTodayScore(userInfos.data.data.todayScore || userInfos.data.data.score);

                /**
                 * Array of objet
                 * @constant activity
                 * @property {string|number} day
                 * @property {number} kilogram
                 * @property {number} calories
                 */

                const activity = await getUserData(id, 'activity');
                setUserActivity(activity.data.data.sessions);

                /**
                 * Array of objet
                 * @constant averageSessions
                 * @property {number} day
                 * @property {number} sessionsLenght
                 */

                const averageSessions = await getUserData(id, 'average-sessions');
                setUserAverageSessions(averageSessions.data.data.sessions);

                /**
                 * Array of objet
                 * @constant performance
                 * @property {number} value
                 * @property {number} kind
                 */

                
                const performance = await getUserData(id, 'performance');
                setUserPerformance(performance.data.data.data);
            } catch (error) {
                console.error('Error: profileAllData', error);
                 
            }

            
        }
        getProfilePageAllData();
    }, [id]);

    const { firstName } = userInfos;
    
    


        return (

            
            <main  className="main-profilePage">
                <div className="profilePage-heading">
                    <h1>
                        Bonjour,
                        <span className="profilePage-firstName"> {firstName}</span>
                    </h1>
                    
                    
                     
                    <p>Félicitation ! Vous avez explosé vos objectifs hier <span aria-label='' role="img">👏</span></p>
                </div>

                <div className="profilePage-informations">
                    <div className="profilePage-graphs">
                        <div className="day-activity">
                            <div className="bar-chart-graph">
                                <BarChartGraph  Activity={userActivity}/>    
                            </div>
                        </div>
                        <div className="trio-charts">
                            <div className="line-chart-graph">
                            <Linechartgraph AverageSessions={userAverageSessions}/>
                            </div>
                            <div className="radar-chart-graph">
                            <Radarchartgraph Performance={userPerformance}/>
                            </div>
                            <div className="radialbar-chart-graph">
                            <Radialbarchartgraph  todayScore={todayScore}/>
                                
                            </div>
                        </div>
                    </div>

                    <div className="keys-data-cards">
                    
                       
                            <List KeyList={keyData}/>
                         
                    </div>
                </div>
            </main>
        );
    }


export default Profile;