import React,{useEffect,useState} from 'react';
import "./Profile.css"
import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE } from '../../API/Data/data';
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
       
        async function getProfilePageAllData() {
            try {

                
                
                const userInfos = await getUserData(id, '');
                setUserInfos(userInfos.data.data.userInfos);
                setKeyData(userInfos.data.data.keyData);

                setTodayScore(userInfos.data.data.todayScore || userInfos.data.data.score);

                const activity = await getUserData(id, 'activity');
                setUserActivity(activity.data.data.sessions);

                const averageSessions = await getUserData(id, 'average-sessions');
                setUserAverageSessions(averageSessions.data.data.sessions);

                
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
                    
                    
                     
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
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