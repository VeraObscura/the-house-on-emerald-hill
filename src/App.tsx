import './App.css'
import Opening from './scenes/0_opening'
import FirstBedroom from './scenes/10_firstBedroom'
import SecondBedroom from './scenes/11_secondBedroom'
import MasterBedroom from './scenes/13_masterBedroom'
import Attic from './scenes/14_attic'
import ThirdBedroom from './scenes/16_thirdBedroom'
import Facade from './scenes/1_facade'
import FiveFootWay from './scenes/2_fiveFootWay'
import Parlour from './scenes/3_skywell'
import Skywell from './scenes/3_skywell'
import Foyer from './scenes/4_foyer'
import DiningRoom from './scenes/5_diningRoom'
import FamilyRoom from './scenes/6_familyRoom'
import Stairs from './scenes/7_stairs'
import Kitchen from './scenes/8_kitchen'
import Corridor from './scenes/9_corridor'

const App = () => {
    return (
        <div className="app">
            <Opening />
            <Facade />
            <FiveFootWay />
            <Skywell />
            <Foyer />
            <DiningRoom />
            <FamilyRoom />
            <Stairs />
            <Kitchen />
            <Corridor />
            <FirstBedroom />
            <SecondBedroom />
            <Parlour />
            <MasterBedroom />
            <Attic />
            <ThirdBedroom />
        </div>
    )
}

export default App
