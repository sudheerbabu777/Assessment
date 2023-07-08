import './index.css'
import { AiFillSetting, AiOutlineLike, AiOutlineUsergroupDelete } from 'react-icons/ai'
import { FaRegCircleUser } from 'react-icons/fa6'
import { IoMdPricetags } from 'react-icons/io'
import { BiSolidCircleThreeQuarter } from 'react-icons/bi'
import { LiaCalendarWeekSolid } from 'react-icons/lia'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillBellFill } from 'react-icons/bs'
import { FaWallet } from 'react-icons/fa'
import { Line, Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Title,
    ArcElement,
} from 'chart.js'





ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Title,
    ArcElement
)

const Home = () => {
    const data = {
        labels: ['week1', "week2", "week3", "week4", "week5"],
        datasets: [{
            label: "Guest",
            data: [100, 300, 250, 380, 220, 420],
            backgroundColor: 'red',
            borderColor: "red",
            pointBorderColor: "aqua",
            tension: 0.4,
        },
        {
            label: "Users",
            data: [200, 380, 250, 420, 280, 460],
            backgroundColor: 'aqua',
            borderColor: "aqua",
            pointBorderColor: "aqua",
            tension: 0.4,
        }
        ],
       
    }

    const options = {
        plugins: {
            legend: {
                postion: "left"
            },
        },
        scales: {
            y: {
                min: 100,
                max: 500,
            },

        }
    }

    const pieChart = () => {
        const data = {
            datasets: [{
                data: [30,40, 60],
                backgroundColor: [
                    "hsl(11, 96%, 70%)",
                    "hsl(72, 82%, 66%)",
                    "hsl(154, 92%, 67%)"
                ],
            }],
            labels: [
                "Red",
                "Orange",
                "Green"
            ]


        }

        const option={
            plugins:{
                legend:{
                    display:false,
                    postion:"right"
                }
            }
        }
        return (
            <Pie data={data} option={option} className='pic' />
        )

    }


    return (
        <div className='home-container'>
            <div className='board-container'>
                <h1 className="board">Board</h1>
                <ul>
                    <li>
                        <BiSolidCircleThreeQuarter />
                        <p>Dashboard</p>
                    </li>
                    <li>
                        <IoMdPricetags />
                        <p>Transaction</p>
                    </li>
                    <li>
                        <LiaCalendarWeekSolid />
                        <p>Schedules</p>
                    </li>
                    <li>
                        <FaRegCircleUser />
                        <p>User</p>
                    </li>
                    <li>
                        <AiFillSetting />
                        <p>Setting</p>
                    </li>
                </ul>
            </div>
            <div class="dashboard">
                <nav>
                    <h1>Dashboard</h1>
                    <div className='search-input-container'>
                        <div className='search-input'>
                            <input className="search" type='search' placeholder='Search...' />
                            <AiOutlineSearch fontSize={28} />
                        </div>
                        <BsFillBellFill />
                        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                            alt="clothes that get you noticed" />
                    </div>

                </nav>
                <ul className='ul'>
                    <li className='money one'>
                        <FaWallet fontSize={24} />
                        <p class="total">Total Revernues</p>
                        <h1 class="current">$2,129,430</h1>
                    </li>

                    <li className='money two'>
                        <IoMdPricetags fontSize={24} />
                        <p class="total">Total Transaction</p>
                        <h1 class="current">1,520</h1>
                    </li>
                    <li className='money three'>
                        <AiOutlineLike fontSize={24} />
                        <p class="total">Total Like</p>
                        <h1 class="current">9,728</h1>
                    </li>
                    <li className='money foue'>
                        <AiOutlineUsergroupDelete fontSize={24} />
                        <p class="total">Total User</p>
                        <h1 class="current">896</h1>
                    </li>
                </ul>
                <div className='chart' style={{ width: 900, height: 500 }}>
                    <h1 className='active'>Activites</h1>
                    <Line width={900} height={180}
                    
                        data={data}
                        options={options}

                    ></Line>
                </div>
                <div className='pie-container'>  
                    <div style={{ width: 300, height: 180 }} className='pic-chart-container'>
                        <h1 className='active'>Top Product</h1>
                        {pieChart()}
                    </div>
                    <div className='pie-chart-container' >
                        <h1 className='activa'>Today`s Schedules</h1>
                        <div >
                            <div className='box'>
                                <h1 className='schedle'>Meeting with suppliers from Kuta Bali</h1>
                                <p className='msg'>14.00-15.00</p>
                                <p className='msg'>at Sunset Road, Kuta, Bali </p>
                            </div>
                            <div className='box'>
                                <h1 className='schedle'>Check operation at Giga Factory 1</h1>
                                <p className='msg'>18.00-20.00</p>
                                <p className='msg'>at Central Jakarta </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home